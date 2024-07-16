<template class="overflow-x-auto">
  <div :dir="direction">
    <heder
      :toggleLanguage="toggleLanguage"
      :unSelctAllOfThem="unSelctAllOfThem"
      class="w-full cover-gradient-2"
    />
    <div class="mb-[160px]">
      <RouterView class="overflow-x-auto" />
    </div>
  </div>

  <footer class="fixed bottom-0 left-0 w-full p-2 shadow bg-gray-800">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm sm:text-center text-gray-400"
        >© 2024 Smart Solutions Ltd. All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0"
      >
        <!-- <li>
              <p  class="hover:underline me-4 md:me-6">ENG/ Omar Mohamed Atef</p>
          </li>
        <li>
              <a  class="hover:underline me-4 md:me-6">Prof/ Khaled Mohamed Dewidar</a>
          </li>
          <li>
              <p  class="hover:underline me-4 md:me-6">Prof/ Gehan Ahmed Nagy</p>
          </li>  -->

        <li>
          <p class="hover:underline me-4 md:me-6">
            Provided by: O.M.A., K.M.D., and G.A.N
          </p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
import heder from "./contaners/heder.vue";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

let rows = ref([]);

onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('tr[id^="Ext-"]')); // Filter rows by ID
});
const unSelctAllOfThemConfelrm = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      unSelctAllOfThem();
    }
  });
};
const unSelctAllOfThem = () => {
  rows.value.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      const localStorageKey1 = `All-row-${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey2 = `Ext-row-${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey3 = `Inte-row-${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey4 = `Oth-row-${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey5 = `sta-row-${row.id}-checkbox-${checkboxIndex}`;

      checkbox.checked = localStorage.setItem(
        `unCheckRows-${row.id}`,
        row.outerHTML
      );

      localStorage.removeItem(
        `All-row-${row.id}-checkbox-value-${checkboxIndex}`
      );
      localStorage.removeItem(
        `Ext-row-${row.id}-checkbox-value-${checkboxIndex}`
      );
      localStorage.removeItem(
        `Inte-row-${row.id}-checkbox-value-${checkboxIndex}`
      );
      localStorage.removeItem(
        `Oth-row-${row.id}-checkbox-value-${checkboxIndex}`
      );
      localStorage.removeItem(
        `sta-row-${row.id}-checkbox-value-${checkboxIndex}`
      );

      localStorage.removeItem(localStorageKey1);
      localStorage.removeItem(localStorageKey2);
      localStorage.removeItem(localStorageKey3);
      localStorage.removeItem(localStorageKey4);
      localStorage.removeItem(localStorageKey5);
      for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
        localStorage.setItem(`Ext-columnSum-${columnIndex}`, 0);
        localStorage.setItem(`Inte-columnSum-${columnIndex}`, 0);
        localStorage.setItem(`Oth-columnSum-${columnIndex}`, 0);
        localStorage.setItem(`sta-columnSum-${columnIndex}`, 0);
      }
      toggleSvgDisplay(checkbox, rowIndex);
      window.location.reload();
    });
  });
};
const toggleSvgDisplay = (input) => {
  const label = input.nextElementSibling;

  if (input.type === "checkbox" || input.type === "checkbox") {
    if (input.checked) {
      if (label) {
        // Check if label exists
        label.classList.add("show-svg"); // Show the SVG if input is checked
      }
    } else {
      if (label) {
        // Check if label exists
        label.classList.remove("show-svg"); // Hide the SVG if input is unchecked
      }
    }
  }
};
</script>
<script>
import heder from "./contaners/heder.vue";
export default {
  components: {
    heder,
  },
  data() {
    return {
      direction: "rtl", // or 'ltr' based on the language
    };
  },
  mounted() {
    // Check if language preference is stored in local storage

    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      this.$i18n.locale = storedLang;
      this.direction = storedLang === "ar" ? "rtl" : "ltr";

      // Display the appropriate icon based on the stored language
      var themeToggleLightIcon = document.getElementById("En");
      var themeToggleDarkIcon = document.getElementById("Ar");

      if (storedLang === "ar") {
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
      } else {
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If no stored preference, use system default dark mode preference
      this.$i18n.locale = "ar";
      this.direction = "rtl";
    } else {
      this.$i18n.locale = "en";
      this.direction = "ltr";
    }
  },

  methods: {
    toggleLanguage() {
      var themeToggleDarkIcon = document.getElementById("Ar");
      var themeToggleLightIcon = document.getElementById("En");
      localStorage.setItem("lang", "en");
      window.location.reload();
      if (this.$i18n.locale === "ar") {
        themeToggleLightIcon.classList.remove("hidden");
        themeToggleDarkIcon.classList.add("hidden");
        localStorage.setItem("lang", "en");
      } else {
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
        localStorage.setItem("lang", "ar");
      }

      // Toggle between 'en' and 'ar'
      this.$i18n.locale = this.$i18n.locale === "en" ? "ar" : "en";

      // Update the direction based on the selected language
      this.direction = this.$i18n.locale === "ar" ? "rtl" : "ltr";
    },
  },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Merriweather+Sans:ital,wght@0,300;0,600;1,300;1,800&family=Merriweather:wght@300&display=swap");
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }
}

* {
  font-weight: 700;
  scroll-behavior: smooth;
}

td {
  height: 100%;
}

svg {
  display: none;
  /* Hide SVG by default */
}

.show-svg svg {
  display: block;
  /* Display SVG when the checkbox is checked */
}

/* Basic responsive table styling */
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #ccc;
  padding: 0px;
  text-align: center;
  align-content: center;
  height: 100%;
}

/* Media query for smaller devices */
@media (max-width: 1400px) {
  table {
    /* display: block; */

    overflow-x: hidden;
    font-size: medium;
    /* border-collapse: collapse; */
  }
}

@media (max-width: 1100px) {
  table {
    /* display: block; */

    overflow-x: hidden;
    font-size: small;
    /* border-collapse: collapse; */
  }
}

@media (max-width: 500px) {
  table {
    font-size: 11px;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }
}

ul.a {
  list-style-type: circle;
}

img {
  width: 30px;
  height: 30px;
}

.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}
</style>

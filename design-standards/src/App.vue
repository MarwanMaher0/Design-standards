<template>
  <div :dir="direction" class="overflow-x-auto">
    <!-- Your main app content -->
    <div class="absolute z-20 mx-20 m-2 mt-7">
      <button
        @click="toggleLanguage"
        id="theme-toggle"
        type="button"
        class="text-gray-500 d-print-none rounded-lg text-sm p-2.5">
        <span id="Ar" class="hidden w-5 h-5 font-extrabold text-xl"> Ar </span>
        <span id="En" class="hidden w-5 h-5 font-extrabold text-xl"> En </span>
      </button>
    </div>
    <RouterView />
  </div>
</template>
<script>
export default {
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
}
td {
  height: 100%;
  padding: 0;
}

svg {
  display: none;
  /* Hide SVG by default */
}
.show-svg svg {
  display: block; /* Display SVG when the checkbox is checked */
}

/* Basic responsive table styling */
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #ccc;
  /* padding: 8px; */
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
</style>

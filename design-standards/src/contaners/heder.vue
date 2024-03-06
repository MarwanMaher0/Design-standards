<template>
  <div class="lg:max-w-768 lg:flex lg:flex-wrap">
    <nav
      class="cover-gradient-2 block w-full min-w-full overflow-x-hidden text-xxs lg:table border-gray-200 dark:bg-gray-900"
    >
      <div
        class="block lg:flex flex-wrap items-baseline justify-between mx-auto pt-8 p-4"
      >
        <div class="flex items-baseline">
          <div class="flex items-baseline">
           
          </div>
          <span
            class="flex items-baseline d-print p-5 border border-[#0c66ee] rounded-lg font-bold items-center bg-black capitalize from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-black"
          >
            {{ schooltital }}</span
          >
        </div>
        <div class=""></div>

       
          <div
            class=" w-ful d-print-none  lg:block pt-1"
            id=""
          >
            <ul
              class="font-medium w-full items-baseline flex flex-col  mt-4 rounded-lg bg-gray-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <Button
                  type="button"
                  @click="thePrint"
                  class="max-w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
                >
                {{ $t("Print") }}
                  
                </Button>
              </li>

              <li>
                <button
                  @click="toggleLanguage"
                  id="theme-toggle"
                  type="button"
                  class="w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
                >
                  <span id="Ar" class="font-extrabold text-xl">En </span>
                  <span id="En" class="hidden font-extrabold text-xl">  ع</span>
                </button>
              </li>
              <li>
                <!-- <button
                  @click="unSelctAllOfThemConfelrm()"
                  class="max-w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 border border-[red] text-white"
                >
                {{ $t("UNSELECT ALL") }}
                  
                </button> -->
              </li>
            </ul>
          </div>
      </div>
      <div
          class=" text-xl d-print-none pt-1"
        >
          <ul
          :class="{ 'flex-row-reverse': direction === 'ltr', 'flex-row': direction === 'rtl' }"

            class="font-medium w-full items-baseline block flex-col p-4   rounded-lg bg-gray-0     lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'Home' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded  lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("Home") }}</router-link
              >
        
              	
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConExternalv' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded  lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("External Educational Spaces (layout)") }}</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConInternal' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded  lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("Internal Educational Spaces (Classroom)") }}</router-link
              >
            </li>

            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConStairs' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded  lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("Servant Spaces (Stairs and corridors)") }}</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConOther' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded  lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("Residential Educational Spaces") }}</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConAll' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded   lg:hover:text-blue-700  dark:text-white lg:dark:text-blue-500"
                >{{ $t("All Spaces") }}</router-link
              >
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Swal from 'sweetalert2'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
  Modal,
} from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
  gitSchooltital(); // Initial call to set the value
  rows.value = Array.from(document.querySelectorAll("tr")); // Filter rows by ID
});
let rows = ref([]);
let SideBar = ref(false);
const openSideBar = () => {
  SideBar.value = true;
};
const thePrint = async () => {
  try {
    setTimeout(() => {
      window.print();
    }, 1000);
  } catch (error) {
    console.error("Error:", error);
  }
};
const props = defineProps({
  unSelctAllOfThem: {
    type: Function,
  },
  toggleLanguage: {
    type: Function,
  },
});
const schooltital = ref("schoolName");
const gitSchooltital = () => {
  schooltital.value = localStorage.getItem("schoolName");
};
const unSelctAllOfThemConfelrm =()=>{
  const lang = localStorage.getItem('lang');

 if (lang === 'en') {
  
   Swal.fire({
     
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     cancelButtonText: "Cancel",
     confirmButtonText: "Yes, delete it!"
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
       });
       unSelctAllOfThem();
     }
   });
 } 
 else if (lang === 'ar') {
  Swal.fire({
  
  title: "هل انت متاكد؟",
  text: "!لن تتمكن من التراجع عن هذا",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "الغاء",

  confirmButtonText: "نعم، احذفه!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "تم الحذف!",
      text: "لقد تم حذف الاختيرات الخاص بك.",
      icon: "success"
    });
    unSelctAllOfThem();
  }
});
 }
}
const unSelctAllOfThem = () => {
  for (let key in localStorage) {
  // Check if the key starts with the specified prefix
  if (key.startsWith('Ext-row') || key.startsWith('Inte-row') || key.startsWith('Oth-row') || key.startsWith('sta-row')  ) {
    // Remove the item from localStorage
    localStorage.removeItem(key);
  }
  window.location.reload();
  
}


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


const direction = ref(localStorage.getItem('lang') === 'ar' ? 'rtl' : 'ltr');
watch(() => {
  const storedLang = localStorage.getItem("lang");
  direction.value = storedLang === "ar" ? "rtl" : "ltr";
});
setInterval(gitSchooltital, 3000);
</script>

<style>
.show-svg svg {
  display: block;
  /* Display SVG when the checkbox is checked */
}

.text-gradient {
  color: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}

@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }

  .pading {
    padding-top: 100px;
  }
}

.active-link {
  /* Add your active styles here */
  color: blue;
  --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  font-weight: bold;
}
  
</style>

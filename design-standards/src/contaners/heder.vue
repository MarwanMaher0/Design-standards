<template>
  <div class="lg:max-w-768   lg:flex lg:flex-wrap">
    <nav
      class="cover-gradient-2 block w-full min-w-full overflow-x-hidden text-xxs lg:table border-gray-200 dark:bg-gray-900">
      <div class=" block lg:flex flex-wrap items-baseline justify-between mx-auto pt-8 p-4">
        <div class=" flex  items-baseline">
          <div class=" flex  items-baseline">


            <button data-collapse-toggle="navbar-default"
              class="show-svg d-print-none inline-flex relative items-center lg:hidden w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button">
              <span class="sr-only ml-20">Open main menu</span>
              <svg class="w-5 h-5 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <span
            class="flex items-baseline d-print p-5  border border-[#0c66ee]  rounded-lg  font-bold items-center bg-black capitalize from-sky-500 to-cyan-400 bg-clip-text text-xl  font-bold text-black ">
             {{ schooltital }}</span>
        </div>

        <div  class="hidden w-ful d-print-none pr-10 mr-5 lg:block pt-1 pb-4" id="navbar-default">
          <ul
            class="font-medium w-full items-baseline flex flex-col p-4 lg:p-0 mt-4  rounded-lg bg-gray-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link active-class="active-link" :to="{ name: 'Home' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">Home</router-link>
            </li>
            <li>
              <router-link active-class="active-link" :to="{ name: 'ConExternalv' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">External</router-link>
            </li>
            <li>
              <router-link active-class="active-link" :to="{ name: 'ConInternal' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">Internal</router-link>
            </li>

            <li>
              <router-link active-class="active-link" :to="{ name: 'ConStairs' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">stairs</router-link>
            </li>
            <li>
              <router-link active-class="active-link" :to="{ name: 'ConOther' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">Other</router-link>
            </li>
            <li>
              <router-link active-class="active-link" :to="{ name: 'ConAll' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded lg:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500">AllOfThem</router-link>
            </li>
            <li>
              <Button type="button" @click="thePrint"
                class="max-w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                Print
              </Button>

            </li>
           
            <li>
              <button @click="toggleLanguage" id="theme-toggle" type="button"
                class="w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                <span id="Ar" class=" font-extrabold text-xl">Ar </span>
                <span id="En" class="hidden  font-extrabold text-xl"> En </span>
              </button>
            </li>
            <li>
              <Button type="button" @click="unSelctAll"
                class="max-w-full my-2 lg:m-0 rounded-3xl px-8 py-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 border border-[red] text-white">
                Un Selct All
              </Button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

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
  rows.value = Array.from(document.querySelectorAll('tr')); // Filter rows by ID

});
let rows = ref([]);
let SideBar = ref(false);
const openSideBar = () => {
 
  SideBar.value = true
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
  toggleLanguage: {
    type: Function,
  }
});
const schooltital = ref("schoolName");
const gitSchooltital = () => {

    schooltital.value = localStorage.getItem('schoolName');
};
const unSelctAll = () => {
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

      checkbox.checked =

        localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
        localStorage.removeItem(`CheckRows-${row.id}`);
        
        localStorage.removeItem(`All-row-${row.id}-checkbox-value-${checkboxIndex}`);
        localStorage.removeItem(`Ext-row-${row.id}-checkbox-value-${checkboxIndex}`);
        localStorage.removeItem(`Inte-row-${row.id}-checkbox-value-${checkboxIndex}`);
        localStorage.removeItem(`Oth-row-${row.id}-checkbox-value-${checkboxIndex}`);
        localStorage.removeItem(`sta-row-${row.id}-checkbox-value-${checkboxIndex}`);
        
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
  .pading{
    padding-top: 100px;
  }
}

.active-link {
  /* Add your active styles here */
  color: blue;
  font-weight: bold;
}</style>

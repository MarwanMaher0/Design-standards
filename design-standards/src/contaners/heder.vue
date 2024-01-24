<template>
  <div class="md:max-w-768 d-print-none md:flex md:flex-wrap">
    <nav
      class="bg-gray-200 block w-full min-w-full overflow-x-hidden text-xxs md:table border-gray-200 dark:bg-gray-900">
      <div
        class="shadow-xl flex flex-wrap items-baseline justify-between mx-auto pt-8 p-4">
        <div class="">
          <button
            data-collapse-toggle="navbar-default"
            class="show-svg inline-flex relative items-center md:hidden w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            @click="openSideBar">
            <span class="sr-only ml-20">Open main menu</span>
            <svg
              class="w-5 h-5 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          class="hidden w-ful pr-10 mr-5 md:block pt-1 pb-4"
          id="navbar-default">
          <ul
            class="font-medium w-full items-baseline flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConExternalv' }"
                class="block py-2 px-3 hover:bg-gray-100 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >External</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConInternal' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Internal</router-link
              >
            </li>

            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConStairs' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >stairs</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConOther' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Other</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                :to="{ name: 'ConAll' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >AllOfThem</router-link
              >
            </li>
            <li>
              <button
                type="button"
                @click="thePrint"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                print
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

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
});
const thePrint = async () => {
  try {
    setTimeout(() => {
      window.print();
    }, 1000);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<style>
.show-svg svg {
  display: block;
  /* Display SVG when the checkbox is checked */
}

@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print {
    display: block !important;
  }
}
.active-link {
  /* Add your active styles here */
  color: blue;
  font-weight: bold;
}
</style>

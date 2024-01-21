<template>
  <div class="md:max-w-768 d-print-none md:flex md:flex-wrap">
    <nav
      class="bg-gray-200 block w-full min-w-full overflow-x-hidden text-xxs md:table border-gray-200 dark:bg-gray-900">
      <div
        class="shadow-xl flex flex-wrap items-baseline justify-between mx-auto pt-8 p-4">
        <div class="">
          <button
            class="show-svg inline-flex relative items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          class="hidden w-ful pr-10 mr-5 md:block pt-1 pb-4 md:w-auto"
          id="navbar-default">
          <ul
            class="font-medium items-baseline flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link
                :to="{ name: 'ConExternalv' }"
                class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >External</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'ConInternal' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Internal</router-link
              >
            </li>

            <li>
              <router-link
                :to="{ name: 'ConStairs' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >stairs</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'ConOther' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Other</router-link
              >
            </li>
            <li>
              <router-link
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

    <div
      v-if="SideBar"
      class="static d-print-none left-0 top-0 w-full h-full z-20 p-4 duration-700 ease-in-out bg-gray-300 dark:bg-gray-800 transform translate-x-0 transition-transform"
      :class="{ 'translate-x-full': !SideBar }">
      <h5
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        للتحسين
      </h5>
      <button
        type="button"
        @click="closeSideBar"
        class="show-svg text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div
        class="py-4 h-[850px] overflow-y-auto dark:bg-gray-700 bg-gray-200 rounded-lg m-4 croll-smooth">
        <ul class="space-y-2 font-bold text-lg">
          <li class="text-right"></li>

          <li class="pr-3 m-2 p-2 dark:bg-gray-200 bg-white rounded-lg">
            <div dir="rtl" class="text-right w-full">
              <ul class="">
                <li class="text-sm"></li>
                <tabelHeder />
                <table class="overflow-x-auto">
                  <tbody
                    v-html="tableContentEST"
                    class="float-start w-full"></tbody>
                </table>

                <li class="text-sm">
                  <tabelHeder />
                  <table class="overflow-x-auto">
                    <tbody v-html="tableContentInte"></tbody>
                  </table>
                </li>
                <li class="text-sm">
                  <tabelHeder />
                  <table class="overflow-x-auto">
                    <tbody v-html="tableContentsta"></tbody>
                  </table>
                </li>
                <li class="text-sm">
                  <tabelHeder />
                  <table class="overflow-x-auto ">
                    <tbody v-html="tableContentOth"></tbody>
                  </table>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import tabelHeder from "../components/TabelHeder.vue";
import External from "../contaners/External.vue";

import { ref, computed, onMounted } from "vue";
const tableContentEST = ref("");
const tableContentInte = ref("");
const tableContentOth = ref("");
const tableContentsta = ref("");

onMounted(() => {
  tableContentEST.value = getUncheckedRowsFromLocalStorageExt();
  tableContentInte.value = getUncheckedRowsFromLocalStorageInte();
  tableContentsta.value = getUncheckedRowsFromLocalStoragesta();
  tableContentOth.value = getUncheckedRowsFromLocalStorageOth();

  // Assign checkboxes to refs
});
const getUncheckedRowsFromLocalStorageExt = () => {
  const uncheckedRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("rowWithCheckbox-") && key.includes("Ext-")) {
      uncheckedRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  uncheckedRowsArray.sort((a, b) => {
    const idA = parseInt(
      a.key.split("-").pop().replace("rowWithCheckbox-Ext-row-", "")
    );
    const idB = parseInt(
      b.key.split("-").pop().replace("rowWithCheckbox-Ext-row-", "")
    );
    return idA - idB;
  });

  return uncheckedRowsArray.map((item) => item.value).join("");
};
/////////////////// //////////////////////////////////////
const getUncheckedRowsFromLocalStorageInte = () => {
  const uncheckedRowsArray = []; // Use an array to maintain order

  // Populate the array with rows that meet the criteria
  for (let key in localStorage) {
    if (key.startsWith("rowWithCheckbox-") && key.includes("Inte-")) {
      uncheckedRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  // Sort the array based on the numeric part of the IDs
  uncheckedRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("Inte-row-", "")); // Extract the numeric part and convert to integer
    const idB = parseInt(b.key.split("-").pop().replace("Inte-row-", "")); // Extract the numeric part and convert to integer
    return idA - idB; // Compare the numeric parts
  });

  // Return only the values from the sorted array
  return uncheckedRowsArray.map((item) => item.value).join("");
};
////////////////////////////////////////////////////////
const getUncheckedRowsFromLocalStorageOth = () => {
  const uncheckedRowsArray = []; // Use an array to maintain order

  // Populate the array with rows that meet the criteria
  for (let key in localStorage) {
    if (key.startsWith("rowWithCheckbox-") && key.includes("Oth-")) {
      uncheckedRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  // Sort the array based on the numeric part of the IDs
  uncheckedRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("Oth-row-", "")); // Othract the numeric part and convert to integer
    const idB = parseInt(b.key.split("-").pop().replace("Oth-row-", "")); // Othract the numeric part and convert to integer
    return idA - idB; // Compare the numeric parts
  });

  // Return only the values from the sorted array
  return uncheckedRowsArray.map((item) => item.value).join("");
};
////////////////////////////////////////////////////////
const getUncheckedRowsFromLocalStoragesta = () => {
  const uncheckedRowsArray = []; // Use an array to maintain order

  // Populate the array with rows that meet the criteria
  for (let key in localStorage) {
    if (key.startsWith("rowWithCheckbox-") && key.includes("sta-")) {
      uncheckedRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  // Sort the array based on the numeric part of the IDs
  uncheckedRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("sta-row-", "")); // Extract the numeric part and convert to integer
    const idB = parseInt(b.key.split("-").pop().replace("sta-row-", "")); // Extract the numeric part and convert to integer
    return idA - idB; // Compare the numeric parts
  });

  // Return only the values from the sorted array
  return uncheckedRowsArray.map((item) => item.value).join("");
};

let SideBar = ref(false);
const openSideBar = () => {
  // Access the computed value of uncheckedRowsFromLocalStoragesta
  tableContentEST.value = getUncheckedRowsFromLocalStorageExt();
  tableContentInte.value = getUncheckedRowsFromLocalStorageInte();
  tableContentsta.value = getUncheckedRowsFromLocalStoragesta();
  tableContentOth.value = getUncheckedRowsFromLocalStorageOth();

  SideBar.value = true;
};
setInterval(() => {
  tableContentEST.value = getUncheckedRowsFromLocalStorageExt();
  tableContentInte.value = getUncheckedRowsFromLocalStorageInte();
  tableContentsta.value = getUncheckedRowsFromLocalStoragesta();
  tableContentOth.value = getUncheckedRowsFromLocalStorageOth();
}, 1000);
const closeSideBar = () => {
  SideBar.value = false;
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
</style>

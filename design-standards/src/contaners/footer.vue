<template>
  <div>
    <table class="max-lg:min-w-[900px] overflow-x-auto">
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " No. of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td class="w-16" rowspan="6" colspan="1"></td>
        <td class="w-24">{{ columnSums[0] }}</td>

        <td class="w-24">{{ columnSums[1] }}</td>
        <td class="w-24">{{ columnSums[2] }}</td>
        <td class="w-24">{{ columnSums[3] }}</td>
        <td class="w-24" rowspan="6"></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " Total No. of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td class="w-64" rowspan="1" colspan="4">
          {{ totalSum }} {{ $t("Points") }}
        </td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " Percentages of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td>{{ percentageFrom24.toFixed(0) }}%</td>
        <td>{{ percentageFrom19.toFixed(0) }}%</td>
        <td>{{ percentageFrom10.toFixed(0) }}%</td>
        <td>{{ percentageFrom27.toFixed(0) }}%</td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " Total Percentages of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td rowspan="1" colspan="4">{{ percentageFrom80.toFixed(0) }}%</td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " Required Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td>86</td>
        <td>57</td>
        <td>40</td>
        <td>117</td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              " Total Required Points for Resilient Design Criteria in(Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td rowspan="1" colspan="4">300 {{ $t("Points") }}</td>
      </tr>
    </table>
  </div>
  <div class="block">
    <div class="flex gap-5 justify-center items-center text-center">
      <div class="text-xl py-4">
        <p>
          {{
            $t(
              " Total Evaluation of the Resilient Design Criteria in All Schools' Spaces "
            )
          }}
        </p>
        <chart class="w-[600px] max-md:w-[350px] my-10 text-center" />
      </div>
      <div class="text-xl py-4">
        <p>
          {{ $t(" Total Evaluation of the Resilient in the School ") }}
        </p>
        <chartTotal class="w-[600px] max-md:w-[350px] my-10 text-center" />
      </div>
      <div class="w-44"></div>
      <div class=""></div>

      <button
        @click="openEnhanceAllForm()"
        type="button"
        class="max-w-full rounded-xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
      >
        {{ $t("Recommendation") }}
      </button>
    </div>
  </div>
  <div id="enhanceForm" class=" ">
    <div class="relative overflow-x-auto"></div>

    <div
      v-if="showEnhanceAllForm"
      class="grid grid-cols-1 place-content-center justify-center"
    >
      <div
        class="content-center backdrop-filter backdrop-blur-sm place-content-center flex items-center justify-center w-fit p-4 overflow-x-auto overflow-y-auto sm:inset-0 max-h-full"
      >
        <div class="grid max-h-full">
          <form
            class="bg-gray-100 justify-self-center rounded-lg shadow dark:bg-gray-700"
          >
            <!-- Modal header -->
            <div
              class="flex ltr justify-between p-4 border-b rounded-t dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ $t("Recommendations for Enhancing Resilience in School:") }}
              </h3>
              <button
                type="button"
                @click="close()"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  class="w-3 block h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="overflow-x-auto">
              <table
                class="w-full text-sm text-left rtl:text-right h-4/5 overflow-x-auto text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th
                      scope="col"
                      class="text-start flex flex-row items-baseline justify-between text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tabletitelExt) }}

                      <router-link
                        :to="{ name: 'ConExternalv' }"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-blod text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus: focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        {{ $t(" CLICK TO ENHANCE") }}
                      </router-link>
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tablesubtitelExt) }}
                      <span>{{ ExtpercentageFrom80 }}%</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-blue-500 text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{
                        $t(
                          "Alert: Remaining choices appear in recommendations for some criteria that have had one choice from multiple choices, such as (Exterior Spaces Form - Building Form)."
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in parsedUnCheckRowsTextArrayExt"
                    :key="index"
                    class="bg-white border-b overflow-x-auto text-start dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 text-start overflow-auto text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div v-html="row"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table
                class="w-full text-sm text-left rtl:text-right h-4/5 overflow-x-auto text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th
                      scope="col"
                      class="text-start flex flex-row items-baseline justify-between text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tabletitelInte) }}

                      <router-link
                        :to="{ name: 'ConInternal' }"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-blod text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus: focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >{{ $t(" CLICK TO ENHANCE") }}</router-link
                      >
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tablesubtitelInte) }}
                      <span>{{ IntepercentageFrom80 }}%</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-blue-500 text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{
                        $t(
                          "Alert: Remaining choices appear in recommendations for some criteria that have had one choice from multiple choices, such as (Classroom Form – Proportion- Classroom Density- Classroom Area- Student’s Area Inside Classroom- Artificial Ventilation- Colors)."
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in parsedUnCheckRowsTextArrayInte"
                    :key="index"
                    class="bg-white border-b text-start dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 text-start text-base overflow-x-auto font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div v-html="row"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table
                class="w-full text-sm text-left rtl:text-right h-4/5 overflow-x-auto text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th
                      scope="col"
                      class="text-start flex flex-row items-baseline justify-between text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tabletitelsta) }}

                      <router-link
                        :to="{ name: 'ConStairs' }"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-blod text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus: focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >{{ $t(" CLICK TO ENHANCE") }}</router-link
                      >
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tablesubtitelsta) }}
                      <span>{{ stapercentageFrom80 }}%</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-blue-500 text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{
                        $t(
                          "Alert: Remaining choices appear in recommendations for some criteria that have had one choice from multiple choices, such as (The width of the corridor)."
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in parsedUnCheckRowsTextArraysta"
                    :key="index"
                    class="bg-white border-b text-start dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 text-start text-base overflow-x-auto font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div v-html="row"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table
                class="w-full text-sm text-left rtl:text-right h-4/5 overflow-x-auto text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th
                      scope="col"
                      class="text-start flex flex-row items-baseline justify-between text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tabletitelOth) }}
                      <router-link
                        :to="{ name: 'ConOther' }"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-blod text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus: focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >{{ $t(" CLICK TO ENHANCE") }}</router-link
                      >
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{ $t(tablesubtitelOth) }}
                      <span>{{ OthpercentageFrom80 }}%</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      class="text-start text-blue-500 text-lg bold px-6 py-3 bg-blue-100"
                    >
                      {{
                        $t(
                          "Alert: Remaining choices appear in recommendations for some criteria that have had one choice from multiple choices, such as (Wall Finishes)."
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in parsedUnCheckRowsTextArrayOth"
                    :key="index"
                    class="bg-white border-b text-start dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 text-start text-base overflow-x-auto font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div v-html="row"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

let router = useRouter();
import chart from "../charts/All-chart.vue";
import chartTotal from "../charts/All-chart-total.vue";
onMounted(() => {
  rows.value = Array.from(document.querySelectorAll("tr")); // Filter rows by ID
  const rowss = document.querySelectorAll("tr");

  watchEffect(() => {
    const hash = window.location.hash;

    if (hash.endsWith("#enhanceForm")) {
      const targetElement = document.getElementById(targetElementId.value);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
const targetElementId = ref("enhanceForm");
let columnSums = ref({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
});
let showEnhanceAllOpen = ref(true);

const percentageFrom80 = computed(() => {
  return (totalSum.value / 300) * 100;
});
const percentageFrom24 = computed(() => {
  return (columnSums.value[0] / 86) * 100;
});
const percentageFrom19 = computed(() => {
  return (columnSums.value[1] / 57) * 100;
});
const percentageFrom10 = computed(() => {
  return (columnSums.value[2] / 40) * 100;
});
const percentageFrom27 = computed(() => {
  return (columnSums.value[3] / 117) * 100;
});
const totalSum = computed(() => {
  return (
    columnSums.value[0] +
    columnSums.value[1] +
    columnSums.value[2] +
    columnSums.value[3]
  );
});
const updateColumnSums = () => {
  for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
    let sum = 0;

    for (let key in localStorage) {
      // Check for keys that match the specified pattern
      if (key.endsWith(`columnSum-${columnIndex}`)) {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          sum += parseFloat(storedValue);
        }
      }
    }
    columnSums.value[columnIndex] = sum;
    localStorage.setItem(`All-${columnIndex}`, sum.toString());
  }
};
const checkedCheckbox = ref(null);

// Get all the checkboxes
const checkboxes = document.querySelectorAll(
  'tr[id^="All-"] input[type="checkbox"][name="ahosting"]'
);

// Watch the checkedCheckbox ref for changes
watch(checkedCheckbox, (newValue) => {
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = checkbox !== newValue && newValue !== null;
  });
});

// Add event listeners to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkedCheckbox.value = this;
    } else if (checkedCheckbox.value === this) {
      checkedCheckbox.value = null;
      checkboxes.forEach((otherCheckbox) => {
        otherCheckbox.disabled = false;
      });
    }
  });
});
watch(
  columnSums,
  (newColumnSums) => {
    localStorage.setItem("All-columnSum-percentage-0", percentageFrom24.value);
    localStorage.setItem("All-columnSum-percentage-1", percentageFrom19.value);
    localStorage.setItem("All-columnSum-percentage-2", percentageFrom10.value);
    localStorage.setItem("All-columnSum-percentage-3", percentageFrom27.value);
    localStorage.setItem(
      "All-columnSum-percentage-total",
      percentageFrom80.value
    );
  },
  { deep: true }
);
setInterval(updateColumnSums, 3000);
let rows = ref([]);

let parsedUnCheckRowsTextArrayAll = ref([]);
let parsedUnCheckRowsTextArrayExt = ref([]);
let parsedUnCheckRowsTextArrayInte = ref([]);
let parsedUnCheckRowsTextArraysta = ref([]);
let parsedUnCheckRowsTextArrayOth = ref([]);
let showEnhanceAllForm = ref(false);
let showEnhanceAllFormChosenBtn = ref(false);
let showEnhanceAllFormUnChosenBtn = ref(false);
let tabletitelExt = ref("");
let tabletitelInte = ref("");
let tabletitelsta = ref("");
let tabletitelOth = ref("");
let tablesubtitelExt = ref("");
let tablesubtitelInte = ref("");
let tablesubtitelsta = ref("");
let tablesubtitelOth = ref("");
let ExtpercentageFrom80 = ref("");
let IntepercentageFrom80 = ref("");
let stapercentageFrom80 = ref("");
let OthpercentageFrom80 = ref("");

const close = () => {
  showEnhanceAllForm.value = false;
};

const openEnhanceAllForm = () => {
  showEnhanceAllFormChosenBtn.value = true;
  showEnhanceAllFormUnChosenBtn.value = false;
  showEnhanceAllForm.value = true;
  parsedUnCheckRowsTextArrayAll.value =
    getParsedUnCheckRowsDataFromLocalStorageAll();
  parsedUnCheckRowsTextArrayExt.value =
    getParsedUnCheckRowsDataFromLocalStorageExt();
  parsedUnCheckRowsTextArrayInte.value =
    getParsedUnCheckRowsDataFromLocalStorageInte();
  parsedUnCheckRowsTextArraysta.value =
    getParsedUnCheckRowsDataFromLocalStoragesta();
  parsedUnCheckRowsTextArrayOth.value =
    getParsedUnCheckRowsDataFromLocalStorageOth();

  tabletitelExt.value =
    "First: Guidelines to Enhance Resilience in Layout. Choose the following:";
  tabletitelInte.value =
    "Second: Guidelines to Enhance Resilience in Classroom. Choose the following:";
  tabletitelsta.value =
    "Third: Guidelines to Enhance Resilience in Servant Spaces (Stairs and Corridors). Choose the following:";
  tabletitelOth.value =
    "Fourth: Guidelines to Enhance Resilience in Residential Education Spaces. Choose the following:";

  tablesubtitelExt.value = "Current Evaluation of Resilience in Layout";
  tablesubtitelInte.value = "Current Evaluation of Resilience in Classroom";
  tablesubtitelsta.value =
    "Current Evaluation of Resilience in Servant Spaces (Stairs and Corridors)";
  tablesubtitelOth.value =
    "Current Evaluation of Resilience in Residential Education Spaces.";

  // Retrieve values from local storage
  const extValue = localStorage.getItem("Ext-columnSum-percentage-total");
  const inteValue = localStorage.getItem("Inte-columnSum-percentage-total");
  const staValue = localStorage.getItem("sta-columnSum-percentage-total");
  const othValue = localStorage.getItem("Oth-columnSum-percentage-total");

  // Format the values with zero decimal places
  const formattedExtValue = (parseFloat(extValue) || 0).toFixed(0);
  const formattedInteValue = (parseFloat(inteValue) || 0).toFixed(0);
  const formattedStaValue = (parseFloat(staValue) || 0).toFixed(0);
  const formattedOthValue = (parseFloat(othValue) || 0).toFixed(0);

  // Set the values to corresponding elements
  ExtpercentageFrom80.value = formattedExtValue;
  IntepercentageFrom80.value = formattedInteValue;
  stapercentageFrom80.value = formattedStaValue;
  OthpercentageFrom80.value = formattedOthValue;

  setTimeout(() => {
    router.push({ name: "ConAll", hash: "#enhanceForm" });
    const targetElement = document.getElementById("enhanceForm");
    // Check if the element exists
    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 0.5);
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
const getParsedUnCheckRowsDataFromLocalStorageAll = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("unCheckRows-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("unCheckRows", ""));
    const idB = parseInt(b.key.split("-").pop().replace("unCheckRows", ""));
    return idA - idB;
  });

  const parsedUnCheckRowsTextArrayAll = AllRowsArray.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.value, "text/html");
    const textParts = doc.body.textContent.trim().split("/");

    // Apply different styling to the last two parts
    const modifiedTextContent =
      textParts.slice(0, -2).join("/") +
      '<span style="color: red;">/' +
      textParts.slice(-2).join("/") +
      "</span>";

    // Return the modified text content
    return modifiedTextContent;
  });

  // Convert to JSON format

  return parsedUnCheckRowsTextArrayAll;
};

const getParsedUnCheckRowsDataFromLocalStorageExt = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("unCheckRows-") && key.includes("Ext-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("unCheckRows", ""));
    const idB = parseInt(b.key.split("-").pop().replace("unCheckRows", ""));
    return idA - idB;
  });

  const parsedUnCheckRowsTextArrayExt = AllRowsArray.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.value, "text/html");
    const textParts = doc.body.textContent.trim().split("/");

    // Apply different styling to the last two parts
    const modifiedTextContent =
      textParts.slice(0, -2).join("/") +
      '<span style="color: red;">/' +
      textParts.slice(-2).join("/") +
      "</span>";

    // Return the modified text content
    return modifiedTextContent;
  });

  // Convert to JSON format

  return parsedUnCheckRowsTextArrayExt;
};

const getParsedUnCheckRowsDataFromLocalStorageInte = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("unCheckRows-") && key.includes("Inte-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-")[1]);
    const idB = parseInt(b.key.split("-")[1]);
    return idA - idB;
  });

  const parsedUnCheckRowsTextArrayInte = AllRowsArray.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.value, "text/html");
    const textParts = doc.body.textContent.trim().split("/");

    // Apply different styling to the last two parts
    const modifiedTextContent =
      textParts.slice(0, -2).join("/") +
      '<span style="color: red;">/' +
      textParts.slice(-2).join("/") +
      "</span>";

    // Return the modified text content
    return modifiedTextContent;
  });

  // Convert to JSON format
  const jsonData = JSON.stringify(parsedUnCheckRowsTextArrayInte);

  return parsedUnCheckRowsTextArrayInte;
};

const getParsedUnCheckRowsDataFromLocalStoragesta = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("unCheckRows-") && key.includes("sta-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("unCheckRows", ""));
    const idB = parseInt(b.key.split("-").pop().replace("unCheckRows", ""));
    return idA - idB;
  });

  const parsedUnCheckRowsTextArraysta = AllRowsArray.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.value, "text/html");
    const textParts = doc.body.textContent.trim().split("/");

    // Apply different styling to the last two parts
    const modifiedTextContent =
      textParts.slice(0, -2).join("/") +
      '<span style="color: red;">/' +
      textParts.slice(-2).join("/") +
      "</span>";

    // Return the modified text content
    return modifiedTextContent;
  });

  // Convert to JSON format
  const jsonData = JSON.stringify(parsedUnCheckRowsTextArraysta);

  return parsedUnCheckRowsTextArraysta;
};

const getParsedUnCheckRowsDataFromLocalStorageOth = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("unCheckRows-") && key.includes("Oth-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(a.key.split("-").pop().replace("unCheckRows", ""));
    const idB = parseInt(b.key.split("-").pop().replace("unCheckRows", ""));
    return idA - idB;
  });

  const parsedUnCheckRowsTextArrayOth = AllRowsArray.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.value, "text/html");
    const textParts = doc.body.textContent.trim().split("/");

    // Apply different styling to the last two parts
    const modifiedTextContent =
      textParts.slice(0, -2).join("/") +
      '<span style="color: red;">/' +
      textParts.slice(-2).join("/") +
      "</span>";

    // Return the modified text content
    return modifiedTextContent;
  });

  // Convert to JSON format
  const jsonData = JSON.stringify(parsedUnCheckRowsTextArrayOth);

  return parsedUnCheckRowsTextArrayOth;
};
</script>

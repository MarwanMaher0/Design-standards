<template>
  <div class="">
    <internalTable
      :columnSums="columnSums"
      :totalSum="totalSum"
      :percentageFrom24="percentageFrom24"
      :percentageFrom19="percentageFrom19"
      :percentageFrom10="percentageFrom10"
      :percentageFrom27="percentageFrom27"
      :percentageFrom80="percentageFrom80"
      :unSelctAll="unSelctAll"
      :GoEnhance="GoEnhance"
    />
  </div>
  <div class="block">
    <div
      class="grid max-lg:grid-cols-1 grid-cols-2 justify-center overflow-x-auto items-center text-center"
    >
      <div class="text-xl grid grid-row-2 justify-center text-warp py-4">
        <p>
          {{
            $t(" Evaluation of the Resilient Design Criteria in the Classroom ")
          }}
        </p>

        <chart class="w-[600px] max-md:w-[350px] my-10 text-center" />
      </div>
      <div class="text-xl grid grid-row-2 justify-center text-warp py-4">
        <p>
          {{
            $t(
              " Total Evaluation of the Resilient Design Criteria in the Classroom "
            )
          }}
        </p>

        <chartTotal class="w-[600px] max-md:w-[350px] my-10 text-center" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import svgGlobal from "../components/svg.vue";

import chart from "../charts/Inte-chart.vue";
import chartTotal from "../charts/Inte-chart-total.vue";
import internalTable from "../components/Internal-table.vue";

onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('tr[id^="Inte-"]')); // Filter rows by ID
  initializeCheckboxes();
  updateColumnSums();
  saveRowsWithCheckboxesToLocalStorage();
});

let rows = ref([]);
let checkedRows = ref([]);
let uncheckedRows = ref([]);
let checkedCheckboxes = ref([]);
let uncheckedCheckboxes = ref([]);

let router = useRouter();
let tableContentInte = ref("");

const GoEnhance = () => {
  router.push({ name: "ConAll", hash: "#enhanceForm" });
  const targetElement = document.getElementById("enhanceForm");
  // Check if the element exists
  if (targetElement) {
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const initializeCheckboxes = () => {
  const InteRows = rows.value.filter((row) => row.id.startsWith("Inte-"));

  InteRows.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"], input[type="radio"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      const localStorageKey1 = `unCheckRows-Inte-row-${rowIndex}-${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey2 = `Inte-row-${rowIndex}-${row.id}-checkbox-${checkboxIndex}`;

      const localStorageValue1 = localStorage.getItem(localStorageKey1);
      const localStorageValue2 = localStorage.getItem(localStorageKey2);

      checkbox.checked =
        localStorageValue1 === "true" || localStorageValue2 === "true";

      checkbox.addEventListener("change", (event) =>
        handleCheckboxChange(event, rowIndex)
      );

      toggleSvgDisplay(checkbox);

      if (checkbox.checked) {
        checkedCheckboxes.value.push(checkbox);
      } else {
        uncheckedCheckboxes.value.push(checkbox);
      }
    });
  });
  updateRowRefsBasedOnCheckboxState();
};

const toggleSvgDisplay = (checkbox, rowIndex) => {
  const label = checkbox.nextElementSibling;

  if (checkbox.checked) {
    label.classList.add("show-svg");
  } else {
    label.classList.remove("show-svg");
  }
};
const updateRowRefsBasedOnCheckboxState = () => {
  checkedRows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );
    return checkboxesInRow.some((checkbox) => checkbox.checked);
  });

  uncheckedRows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );
    return !checkboxesInRow.some((checkbox) => checkbox.checked);
  });
};

const calculateColumnSum = (columnIndex) => {
  let sum = 0;

  for (let key in localStorage) {
    if (
      key.startsWith(`Inte-row-`) &&
      key.endsWith(`-checkbox-value-${columnIndex}`)
    ) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        sum += parseFloat(storedValue);
      }
    }
  }

  return sum;
};
const unSelctAll = () => {
  rows.value.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      const localStorageKey = `Inte-row-${rowIndex}-${row.id}-checkbox-value-${checkboxIndex}`;
      checkbox.checked = localStorage.setItem(
        `unCheckRows-${row.id}`,
        row.outerHTML
      );
      localStorage.removeItem(
        `Inte-row-${rowIndex}-${row.id}-checkbox-${checkboxIndex}`
      );
      localStorage.removeItem(localStorageKey);
      toggleSvgDisplay(checkbox, rowIndex);
      updateColumnSums();
    });
  });
};

// Function to save rows with checkboxes to localStorage
const saveRowsWithCheckboxesToLocalStorage = () => {
  const rowsWithCheckboxes = rows.value.filter((row) => {
    return row.querySelector('input[type="checkbox"]') !== null;
  });

  // Loop through rows with checkboxes
  rowsWithCheckboxes.forEach((row, rowIndex) => {
    const checkbox = row.querySelector('input[type="checkbox"]');

    if (checkbox && !checkbox.checked) {
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
    }
  });
};
// Function to handle checkbox state changes

const handleCheckboxChange = (event, rowIndex) => {
  const clickedCheckbox = event.target;
  const row = clickedCheckbox.closest("tr");

  // Check if the row's ID starts with "Inte-"
  if (!row || !row.id.startsWith("Inte-")) return;

  const checkboxesInRow = Array.from(
    row.querySelectorAll('input[type="checkbox"]')
  );

  // Define groups of rows for manipulation
  const groups = [
    ["Inte-row-1", "Inte-row-2", "Inte-row-3", "Inte-row-4"],
    ["Inte-row-7", "Inte-row-8", "Inte-row-9"],
    ["Inte-row-11", "Inte-row-12"],
    ["Inte-row-13", "Inte-row-14"],
    ["Inte-row-15", "Inte-row-16"],
    ["Inte-row-59", "Inte-row-60"],
    [
      "Inte-row-77",
      "Inte-row-78",
      "Inte-row-79",
      "Inte-row-80",
      "Inte-row-81",
      "Inte-row-82",
    ],
  ];

  // Function to handle checkbox state changes within a group
  const handleGroupCheckboxChange = (group) => {
    group.forEach((groupId) => {
      if (groupId !== row.id) {
        const otherRow = document.getElementById(groupId);
        if (otherRow && group.includes(row.id)) {
          const checkboxesInOtherRow = Array.from(
            otherRow.querySelectorAll('input[type="checkbox"]')
          );
          checkboxesInOtherRow.forEach((otherCheckbox, checkboxIndex) => {
            const isCheckedBeforeChange = otherCheckbox.checked;
            otherCheckbox.checked = false;
            const localStorageKey = `Inte-row-${rowIndex}-${groupId}-checkbox-value-${checkboxIndex}`;
            const localStorageKey2 = `Inte-row-${rowIndex}-${groupId}-checkbox-${checkboxIndex}`;

            if (isCheckedBeforeChange) {
              // Remove checkbox state from localStorage
              for (let key in localStorage) {
                if (
                  key.endsWith(`-${groupId}-checkbox-value-${checkboxIndex}`)
                ) {
                  localStorage.removeItem(key);
                }
                if (
                  key.startsWith("unCheckRows-") &&
                  key.endsWith(`-${groupId}`)
                ) {
                  console.log(key);
                  localStorage.removeItem(key);
                }
              }
              for (let key in localStorage) {
                if (key.endsWith(`-${groupId}-checkbox-${checkboxIndex}`)) {
                  localStorage.removeItem(key);
                }
              }

              // Update SVG display based on checkbox state
              toggleSvgDisplay(otherCheckbox, rowIndex);
            }
          });
        }
      }
    });
  };

  // Loop through each group and handle checkbox state changes
  groups.forEach(handleGroupCheckboxChange);

  // Loop through checkboxes in the current row and update their state
  checkboxesInRow.forEach((checkbox, checkboxIndex) => {
    checkbox.checked = clickedCheckbox.checked;
    const localStorageKey = `Inte-row-${rowIndex}-${row.id}-checkbox-value-${checkboxIndex}`;

    if (checkbox.checked) {
      localStorage.setItem(localStorageKey, checkbox.value);

      // Remove all unCheckRows related to this row from localStorage
      for (let key in localStorage) {
        if (key.startsWith(`unCheckRows-${row.id}`)) {
          localStorage.removeItem(key);
        }
      }
    } else {
      localStorage.removeItem(localStorageKey);
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
    }
    localStorage.setItem(
      `Inte-row-${rowIndex}-${row.id}-checkbox-${checkboxIndex}`,
      checkbox.checked
    );
    toggleSvgDisplay(checkbox, rowIndex);
  });

  // Save rows with checkboxes to localStorage
  updateColumnSums();
  saveRowsWithCheckboxesToLocalStorage();
  // Update the table content
  tableContentInte.value = getAllRowsFromLocalStorageInte();
  // Update row references based on checkbox state
  updateRowRefsBasedOnCheckboxState();
  // Update column sums based on checkbox state
};

let columnSums = ref({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
});

const percentageFrom80 = computed(() => {
  return (totalSum.value / 149) * 100;
});
const percentageFrom24 = computed(() => {
  return (columnSums.value[0] / 43) * 100;
});
const percentageFrom19 = computed(() => {
  return (columnSums.value[1] / 21) * 100;
});
const percentageFrom10 = computed(() => {
  return (columnSums.value[2] / 27) * 100;
});
const percentageFrom27 = computed(() => {
  return (columnSums.value[3] / 58) * 100;
});
const totalSum = computed(() => {
  return (
    columnSums.value[0] +
    columnSums.value[1] +
    columnSums.value[2] +
    columnSums.value[3]
  );
});
watch(
  columnSums,
  (newColumnSums) => {
    localStorage.setItem("Inte-columnSum-percentage-0", percentageFrom24.value);
    localStorage.setItem("Inte-columnSum-percentage-1", percentageFrom19.value);
    localStorage.setItem("Inte-columnSum-percentage-2", percentageFrom10.value);
    localStorage.setItem("Inte-columnSum-percentage-3", percentageFrom27.value);
    localStorage.setItem(
      "Inte-columnSum-percentage-total",
      percentageFrom80.value
    );
  },
  { deep: true }
);
const updateColumnSums = () => {
  for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
    let sum = 0;

    for (let key in localStorage) {
      if (
        key.startsWith(`Inte-row-`) &&
        key.endsWith(`-checkbox-value-${columnIndex}`)
      ) {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          sum += parseFloat(storedValue);
        }
      }
    }
    columnSums.value[columnIndex] = sum;
    // Save the value to local storage
    localStorage.setItem(`Inte-columnSum-${columnIndex}`, sum.toString());
  }
};

const getAllRowsFromLocalStorageInte = () => {
  let rowsHTML = "";
  for (let key in localStorage) {
    if (key.startsWith("Inte-row-") && localStorage.getItem(key)) {
      rowsHTML += localStorage.getItem(key);
    }
  }
  return rowsHTML;
};
setInterval(updateColumnSums, 3000);
</script>

<style>
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }
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
</style>

<template>
  <div>
    <table class="min-x-[1000px] max-lg:w-[900px] overflow-x-auto">
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "No. of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td>{{ columnSums[0] }}</td>
        <td>{{ columnSums[1] }}</td>
        <td>{{ columnSums[2] }}</td>
        <td>{{ columnSums[3] }}</td>
        <td></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "Total No. of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td rowspan="1" colspan="4">{{ totalSum }}</td>
        <td></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "Percentages of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td>{{ percentageFrom24.toFixed(0) }}%</td>
        <td>{{ percentageFrom19.toFixed(0) }}%</td>
        <td>{{ percentageFrom10.toFixed(0) }}%</td>
        <td>{{ percentageFrom27.toFixed(0) }}%</td>
        <td></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "Total Percentages of Realized Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td rowspan="1" colspan="4">{{ percentageFrom80.toFixed(0) }}%</td>

        <td></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "Required Points for Resilient Design Criteria in (Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td>116</td>
        <td>85</td>
        <td>54</td>
        <td>135</td>
        <td></td>
      </tr>
      <tr class="bg-[#d9e2f3]">
        <td class="bg-[#d9e2f3]" rowspan="1" colspan="8">
          {{
            $t(
              "Total Required Points for Resilient Design Criteria in(Layout - Classroom - Stairs and Corridors - Residential Education Spaces) "
            )
          }}
        </td>

        <td></td>
        <td rowspan="1" colspan="4">390</td>

        <td></td>
      </tr>
    </table>
  </div>
  <div class="block">
    <div class="flex justify-center items-center text-center">
      <chart class="w-[400px] my-10 text-center" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUpdated } from "vue";
import chart from "../charts/All-chart.vue";

let columnSums = ref({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
});

const percentageFrom80 = computed(() => {
  return (totalSum.value / 390) * 100;
});
const percentageFrom24 = computed(() => {
  return (columnSums.value[0] / 116) * 100;
});
const percentageFrom19 = computed(() => {
  return (columnSums.value[1] / 85) * 100;
});
const percentageFrom10 = computed(() => {
  return (columnSums.value[2] / 54) * 100;
});
const percentageFrom27 = computed(() => {
  return (columnSums.value[3] / 135) * 100;
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
    localStorage.setItem(
      "All-columnSum-percentage-0",
      percentageFrom24.toFixed(0).value
    );
    localStorage.setItem(
      "All-columnSum-percentage-1",
      percentageFrom19.toFixed(0).value
    );
    localStorage.setItem(
      "All-columnSum-percentage-2",
      percentageFrom10.toFixed(0).value
    );
    localStorage.setItem(
      "All-columnSum-percentage-3",
      percentageFrom27.toFixed(0).value
    );
  },
  { deep: true }
);
setInterval(updateColumnSums, 1000);
</script>

<template>
  <div class="tInte-red-300 font-extrabold">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: [
    "Epidemics",
    "Climate Change",
    "Advanced Technology",
    "Advanced Education",
  ],
  datasets: [
    {
      data: [
        localStorage.getItem("Inte-columnSum-0"),
        localStorage.getItem("Inte-columnSum-1"),
        localStorage.getItem("Inte-columnSum-2"),
        localStorage.getItem("Inte-columnSum-3"),
      ],
      label: 'Internal Educational Spaces (Classroom)	',
      
      backgroundColor: ["#c00000", "#ffc000", "#548135", "#0070c0"],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value + "%";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Set display to false to hide individual legend labels

      color: "blue", // Set the legend item color to blue
      labels: {
        color: "blue", // Set the legend label color to blue
      },
    },
  },
});


// Function to update chartData from localStorage
const updateChartDataFromLocalStorage = () => {
  chartData.value = {
    ...chartData.value, // spread the existing values
    datasets: [
      {
        ...chartData.value.datasets[0], // spread the existing dataset properties
        data: [
          parseFloat(
            localStorage.getItem("Inte-columnSum-percentage-0") || "0"
          ),
          parseFloat(
            localStorage.getItem("Inte-columnSum-percentage-1") || "0"
          ),
          parseFloat(
            localStorage.getItem("Inte-columnSum-percentage-2") || "0"
          ),
          parseFloat(
            localStorage.getItem("Inte-columnSum-percentage-3") || "0"
          ),
        ],
      },
    ],
  };
};

// Update chartData when component is mounted
onMounted(() => {
  updateChartDataFromLocalStorage();
});

// Listen for changes to localStorage and update chartData accordingly
window.addEventListener("storage", (event) => {
  if (event.storageArea === localStorage) {
    updateChartDataFromLocalStorage();
  }
});
setInterval(() => {
  updateChartDataFromLocalStorage();
}, 1000);
// Clean up the event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("storage", updateChartDataFromLocalStorage);
});
</script>

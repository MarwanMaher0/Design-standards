<template>
  <div class=" tsta-red-300 font-extrabold">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: ['Epidemics', 'Climate Change', 'Advanced Technology', 'Advanced Education'],
  datasets: [
    {
      data: [localStorage.getItem('sta-columnSum-0'), localStorage.getItem('sta-columnSum-1'), localStorage.getItem('sta-columnSum-2'), localStorage.getItem('sta-columnSum-3')],
      backgroundColor: ['#c00000', '#ffc000', '#548135', '#0070c0']
    }
  ],
});

const chartOptions = ref({
  responsive: true,
});

// Function to update chartData from localStorage
const updateChartDataFromLocalStorage = () => {
  chartData.value = {
    ...chartData.value, // spread the existing values
    datasets: [{
      ...chartData.value.datasets[0], // spread the existing dataset properties
      data: [
        parseFloat(localStorage.getItem('sta-columnSum-0') || '0'),
        parseFloat(localStorage.getItem('sta-columnSum-1') || '0'),
        parseFloat(localStorage.getItem('sta-columnSum-2') || '0'),
        parseFloat(localStorage.getItem('sta-columnSum-3') || '0')
      ]
    }]
  };
};


// Update chartData when component is mounted
onMounted(() => {
  updateChartDataFromLocalStorage();
});

// Listen for changes to localStorage and update chartData accordingly
window.addEventListener('storage', (event) => {
  if (event.storageArea === localStorage) {
    updateChartDataFromLocalStorage();
  }
});
setInterval(() => {
  updateChartDataFromLocalStorage();
}, 1000); 
// Clean up the event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('storage', updateChartDataFromLocalStorage);
});

</script>

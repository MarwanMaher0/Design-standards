<template>
  <div class="h-96 text-red-300 font-extrabold">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const months = ['January', 'February', 'March'];
const dataValues = [40, 20, 12];

// Data and Options
const chartData = ref({
  labels: months, // Corrected the labels here
  datasets: [
    { 
      data: dataValues,
      backgroundColor: ['#00FF00', 'blue', '#f87979']
    }
  ],
});

const chartOptions = ref({
  responsive: true,
});

</script>

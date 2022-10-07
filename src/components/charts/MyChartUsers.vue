<!-- Create a Chart component for "Users" -->
<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <canvas id="myChart" height="70"></canvas>
   </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
   name: "MyChartUsers",
   props: {
      msg: String
   },
   mounted() {

      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
         type: 'line',
         data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
               label: 'My First Dataset',
               data: [65, 59, 84, 84, 51, 55, 40],
               borderColor: ['rgba(255, 255, 255,0.6)'],
               fill: false,
               tension: 0.5,
               borderWidth: 1
            }]
         },
         options: {
            plugins:{
               legend:{
                  display: false,
               },
            },
            scales: {
               x: {
                  grid:{
                     drawOnChartArea: false,
                     drawBorder: false,
                  },
                  ticks:{
                     display: false,
                  }
               },
               y: {
                  grid:{
                     drawOnChartArea: false,
                     display: false,
                     drawBorder: false
                  },
                  ticks:{
                     display: false
                  },
                  beginAtZero: true
               },
            }
         }
      });

      myChart;
   }
}
</script>

<style scoped>

</style>
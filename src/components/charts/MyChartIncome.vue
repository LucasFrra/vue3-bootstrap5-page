<!-- Create a Chart component for "Income" -->

<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <canvas id="myChartIncome" height="70"></canvas>
   </div>
</template>

<script>
// Charts use chart.js library
import Chart from 'chart.js/auto';
export default {
   name: "MyChartIncome",
   props: {
      msg: String
   },
   mounted() {

      const ctx = document.getElementById('myChartIncome');
      const myChartIncome = new Chart(ctx, {
         type: 'line',
         data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
               label: 'My First Dataset',
               data: [1, 18, 9, 17, 34, 22, 11],
               borderColor: ['rgba(255, 255, 255,0.6)'],
               fill: false,
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

      myChartIncome;
   }
}
</script>

<style scoped>

</style>
<!-- Create a Chart component for "Sessions" -->

<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <canvas id="myChartSessions" height="70"></canvas>
   </div>
</template>

<script>
// Charts use chart.js library
import Chart from 'chart.js/auto';
export default {
   name: "myChartSessions",
   props: {
      msg: String
   },
   mounted() {

      const ctx = document.getElementById('myChartSessions');
      const myChartSessions = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March', 'April'],
            datasets: [{
               label: 'My First Dataset',
               data: [78, 81, 80, 45, 34, 12, 40, 85 ,65, 23, 12, 98,34, 84, 67, 82],
               backgroundColor: ['rgba(255, 255, 255,0.2)'],
               barThickness: 7,
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
               },
            }
         }
      });

      myChartSessions;
   }
}
</script>

<style scoped>

</style>
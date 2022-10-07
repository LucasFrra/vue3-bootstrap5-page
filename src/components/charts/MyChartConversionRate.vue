<!-- Create a Chart component for "ConversionRate" -->

<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <canvas id="myChartConversionRate" height="70"></canvas>
   </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
   name: "myChartConversionRate",
   props: {
      msg: String
   },
   mounted() {

      const ctx = document.getElementById('myChartConversionRate');
      const myChartConversionRate = new Chart(ctx, {
         type: 'line',
         data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
               label: 'My First Dataset',
               data: [78, 81, 80, 45, 34, 12, 40],
               borderColor: ['rgba(255, 255, 255,0.6)'],
               backgroundColor: ['rgba(255, 255, 255,0.2)'],
               fill: true,
               borderWidth: 1,
               tension: 0.5
            }]
         },
         options: {
            elements:{
               point:{
                  radius: 0,
               },
            },
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

      myChartConversionRate;
   }
}
</script>

<style scoped>

</style>
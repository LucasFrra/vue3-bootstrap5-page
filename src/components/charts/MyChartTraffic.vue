<!-- Create a Chart component for "Traffic" -->
<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <canvas id="myChartTraffic"  height="70"></canvas>
   </div>
</template>

<script>
// Charts use chart.js library
import Chart from 'chart.js/auto';
export default {
   name: "myChartTraffic",
   props: {
      msg: String
   },
   mounted() {

      const ctx = document.getElementById('myChartTraffic');
      
      const myChartTraffic = new Chart(ctx, {
         type: 'line',
         data: {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

            datasets: [
               {
               label: 'My First Dataset',
               data: [77, 200, 91, 143, 54, 110, 129],
               borderColor: ['rgb(120, 183, 246)'],
               fill: true,
               tension: 0.3,
               },
               {
                  label: 'My Second Dataset',
                  data: [153, 191, 99, 64, 86, 166, 64],
                  borderColor: ['rgb(46, 184, 92)'],
                  fill: false,
                  tension: 0.3,
               },
               {
                  label: 'My Third Dataset',
                  data: [65,65,65,65,65,65,65],
                  borderColor: ['rgb(207, 82, 82)'],
                  fill: false,
                  borderDash: [10,5],
                  borderWidth: 1
               }
         ]
         },
         options: {
            plugins:{
               legend:{
                  display: false,
               },
            },
            scales:{
               y:{
                  ticks:{
                     textStrokeWidth: 100,
                     stepSize: 50,
                  },
                  min: 50,
                  max: 200
               },
               x:{
                  grid:{
                     drawOnChartArea: false,
                     drawBorder: false,
                  },
               },
            },
            elements: {
               point: {
                  radius: 0
               }
            }
         }
      });

      myChartTraffic;
   }
}
</script>

<style scoped>

</style>
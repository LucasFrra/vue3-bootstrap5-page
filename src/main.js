import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { store } from './store'
import Popper from "vue3-popper"; //Popper - dropdowns
import App from './App.vue'

// Import icons from Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDroplet, faGauge, faPen, faPuzzlePiece, faLocationArrow, faChartPie, faFileWaveform, faStar, faBell, faTableColumns, faRightToBracket, faBug, faFile, faLayerGroup, faList, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faDroplet, faGauge, faPen, faPuzzlePiece, faLocationArrow, faChartPie, faFileWaveform, faStar, faBell, faTableColumns,faRightToBracket, faBug, faFile, faLayerGroup, faList, faEnvelopeOpen);


createApp(App).use(store).component('font-awesome-icon', FontAwesomeIcon).component("Popper",Popper).mount('#app')
import "bootstrap/dist/js/bootstrap.js"

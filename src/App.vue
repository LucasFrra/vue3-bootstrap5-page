<!-- App Main template -->
<template>
  <div id="app">
    <div id="topsection" class="d-flex">
      <!-- Show the sidebar with the class "sidebarLeft" if the panel is open -->
      <div v-if="isPanelOpen">
        <MySidebar class="sidebarleft"/>
      </div>
      
      <div class="flex-grow-1">
        <MyHeader />
        <MyBody />
      </div>


    </div>

  </div>

</template>

<script>

import { store } from '@/store.js'
import MySidebar from "./components/MySidebar.vue";
import MyHeader from "./components/MyHeader.vue";
import MyBody from "./components/MyBody.vue";

export default {
  name: "app",
  components: {
    MySidebar,
    MyHeader,
    MyBody
},

computed: {
        isPanelOpen() {
            return store.isNavOpen
        }
    }
};
</script>
<style scoped>
body {
  border: 0;
  margin: 0;
  padding: 0;
}

.sidebarleft{
  width:255px;
}

#topsection{
  background-color: #EBEDEF;
}
</style>

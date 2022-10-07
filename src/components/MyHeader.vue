<!-- Header template -->
<template>

  <header class="p-3 border-bottom ">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-md-between ">
        <!-- First list : Left content -->
        <ul class="nav nav-pills">
          <!-- Burger for sidebar -->
          <div><MyBurger /></div>
          <li class="nav-item options"><a href="#" class="nav-link txt-color-header">Dashboard</a></li>
          <li class="nav-item options"><a href="#" class="nav-link txt-color-header">Users</a></li>
          <li class="nav-item options"><a href="#" class="nav-link txt-color-header">Settings</a></li>
        </ul>

        <!-- Second list : Right content -->
        <ul class="nav nav-pills">
          <li class="nav-item-right"><a href="#" class="nav-link">
              <font-awesome-icon :icon="['fa', 'bell']" class="fa" />
            </a>
          </li>
          <li class="nav-item-right"><a href="#" class="nav-link">
              <font-awesome-icon :icon="['fa', 'list']" class="fa" />
            </a>
          </li>
          <li class="nav-item-right"><a href="#" class="nav-link">
              <font-awesome-icon :icon="['fa', 'envelope-open']" class="fa" />
            </a>
          </li>
          <li class="nav-item-right"><a href="#" class="nav-link ">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle img-style"
                alt="Avatar" /></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import MyBurger from "./MyBurger.vue";
export default {
  name: 'MyHeader',
  components: {
    MyBurger,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 768px) {
  .options {
    display: none;
  }
}

header {
  background-color: #fff;
}

.txt-color-header {
  color: rgba(44, 56, 74, 0.68);
}


.fa {
  height: 20px;
  color: rgba(75, 85, 99, 0.68);
  padding: 0.3em 0.5em;
  margin-top: 0.2em;
}

.img-style {
  width: 40px;
}

.nav-link:hover,
.fa:hover {
  color: rgb(17, 16, 16);
}
</style>

<!-- Burger Component-->
<template>
    <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
        <slot>
            <div class="container-fluid">
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </slot>
    </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
    computed: {
        isBurgerActive() {
            return store.isNavOpen;
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav();
        }
    }
};
</script>
<style scoped>
.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(44,56,74,0.68)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
    border-color: rgba(44,56,74,0.68);
}


</style>
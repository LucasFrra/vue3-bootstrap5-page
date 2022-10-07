<!-- Template for left sidebar -->
<template>
    <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="sidebar min-vh-100 sidebar-bg-color" id="sidebar">
            <div class="sidebar-brand">
                <a href="#">
                    <img class="sidebar-brand" src="https://coreui.io/docs/2.1/assets/brand/logo.svg" width="120"
                        height="65" alt="CoreUI Logo">
                </a>
            </div>

            <!-- List of all elements -->
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a href="#" class="nav-link text-white active">
                        <font-awesome-icon :icon="['fa', 'gauge']" class="fa" />
                        Dashboard
                        <span class="badge badge-sm bg-info">NEW</span>
                    </a>
                </li>
                
                <li class="nav-item nav-title mt-4 text-white-50"><span>THEME</span></li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'droplet']" class="fa" />
                        Colors
                    </a>
                </li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'pen']" class="fa" />
                        Typography
                    </a>
                </li>

                <li class="nav-item nav-title mt-4 text-white-50"><span>COMPONENTS</span></li>


                <li class="mt-3">
                    <MyDropdownBase />

                </li>

                <li class="mt-3">
                    <MyDropdownButtons />
                </li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'chart-pie']" class="fa" />
                        Charts
                    </a>
                </li>

                <li class="mt-3">
                    <MyDropdownForms />
                </li>

                <li class="mt-3">
                    <MyDropdownIcons />
                </li>

                <li class="mt-3">
                    <MyDropdownNotifications />
                </li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'table-columns']" class="fa" />
                        Widget
                        <span class="badge badge-sm bg-info">NEW</span>
                    </a>
                </li>

                <li class="nav-item nav-title mt-4 text-white-50"><span>EXTRAS</span></li>

                <li class="mt-3">
                    <MyDropdownPages />
                </li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'file']" class="fa" />
                        Docs
                    </a>
                </li>

                <li class="mt-3">
                    <a href="#" class="nav-link text-white-50">
                        <font-awesome-icon :icon="['fa', 'layer-group']" class="fa" />
                        Try CoreUI<b>PRO</b>
                    </a>
                </li>
            </ul>


        </div>
    </div>
</template>
<script>
import { store, mutations } from '@/store.js'
import MyDropdownBase from './dropdown/MyDropdownBase.vue'
import MyDropdownButtons from './dropdown/MyDropdownButtons.vue'
import MyDropdownForms from './dropdown/MyDropdownForms.vue'
import MyDropdownNotifications from './dropdown/MyDropdownNotifications.vue'
import MyDropdownIcons from './dropdown/MyDropdownIcons.vue'
import MyDropdownPages from './dropdown/MyDropdownPages.vue'

export default {
    components: {
        MyDropdownBase,
        MyDropdownButtons,
        MyDropdownForms,
        MyDropdownNotifications,
        MyDropdownIcons,
        MyDropdownPages
    },
    methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    computed: {
        isPanelOpen() {
            return store.isNavOpen
        }
    }
}
</script>

<style scoped>
    ::-webkit-scrollbar{
        appearance: none;
        -webkit-appearance: none;
        width:10px;
    }

    ::-webkit-scrollbar-thumb{
        background-clip: padding-box;
        background-color: rgba(0,0,0,0.5);
        border-radius: 9px;
        box-shadow: 0 0 1px rgba(255,255,255,0.300);
    }
    
.sidebar {
    width: 255px;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    z-index:99999;
}
.active{
    background-color: rgba(255,255,255,0.05) !important;
}

a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 100ms linear;
}


.sidebar-brand {
    display: flex;
    justify-content: center;
    background-color: #303c54;
}

.sidebar-bg-color {
    background-color: #46546C !important;
}

.nav-title {
    margin-left: 15px;
    letter-spacing: -1px;
    font-size: 0.9rem;
    font-weight: bold;
}

.badge-sm {
    padding: 0.3em 0.5em;
    font-size: .65em;
    margin-top: -0.5em;
    vertical-align: middle;
}

.fa {
    margin-right: 10px;
}
</style>

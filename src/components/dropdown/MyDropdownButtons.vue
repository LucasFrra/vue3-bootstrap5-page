<!-- Create a Dropdown component for "Buttons" -->

<script>
import { defineComponent, ref, computed } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'MyDropdownButtons',
  setup() {
    const button = ref(null)
    const dropdown = ref(null)
    const toggle = ref(false)

    const popperInstance = computed(() => {
      return createPopper(button.value, dropdown.value, {
        placement: 'auto-start',
        modifiers: [
          {
            name: 'flip',
            options: {
              allowedAutoPlacements: ['bottom-start', 'top-start'],
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 2],
            },
          },
        ]
      })
    })

    const insertElement = (btn, tip) => {
      button.value = btn
      dropdown.value = tip
    }

    const handleShow = (e) => {
      if (button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
    }

    const handleClick = (e) => {
      if (button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
      dropdown.value.setAttribute('data-show', '')
      popperInstance.value.update()
      toggle.value = true
    }

    const handleHide = (e) => {
      if (button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
      dropdown.value.removeAttribute('data-show')
      toggle.value = false
    }

    return {
      toggle,
      handleShow,
      handleClick,
      handleHide
    }
  }
})
</script>
    
<template>
  <div class="dropdown">


    <button type="button" class="button nav-link text-white-50" id="dropdownMenu" @mouseenter="handleShow($event)"
      @click="toggle === false ? handleClick($event) : handleHide($event)" aria-expanded="false">
      <font-awesome-icon :icon="['fa', 'location-arrow']" class="fa" /> Buttons
    </button>
    <ul class="dropdownMenu" aria-labelledby="dropdownMenu">
      <li class="ml-32px mt-3"><a class="dropdownItem" href="#" @click="handleHide($event)">Buttons</a></li>
      <li class="ml-32px mt-3"><a class="dropdownItem" href="#" @click="handleHide($event)">Buttons Group</a></li>
      <li class="ml-32px mt-3"><a class="dropdownItem" href="#" @click="handleHide($event)">Dropdowns</a></li>

    </ul>



  </div>
</template>
    
<style scoped>
li:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 100ms linear;
}

.ml-32px {
  margin-left: 32px;
}

.button {
  border: none;
  background-color: transparent;
}

.fa {
  margin-right: 10px;
}

.button::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdownMenu {
  font-size: 1rem;
  text-align: left;
  list-style: none;
  min-width: 10rem;
  padding: .5rem 0;
  display: none;
  color: red;
  background-color: red;
}

.dropdownMenu[data-show] {
  display: contents
}

.dropdownItem {
  display: block;
  width: 100%;
  padding: .25rem 1rem;
  clear: both;
  font-weight: 400;
  color: rgba(255, 255, 255, .5);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
</style>
    
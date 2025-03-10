<template>
  <div class="input-group mb-1">
    <div class="input-group-text">
      <input
        type="checkbox"
        class="form-check-input mt-0"
        :id="name"
        :value="value"
        v-model="checked"
        @change="statChange"
      />
    </div>
    <label class="form-control d-flex justify-content-between" :for="name">
      <span>{{ name }}</span>
      <span :class="costClass">{{ displayCost }}</span>
    </label>
    <button
      type="button"
      class="btn btn-outline-secondary info-btn"
      data-bs-toggle="popover"
      data-bs-placement="left"
      data-bs-title="Description"
      :title="name"
      :data-bs-content="description"
      ref="popoverBtn"
    >
      ?
    </button>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useCharacterStore } from '../stores/characterStore'
import { Popover } from 'bootstrap'

export default {
  props: {
    name: String,
    value: Number,
    advantage: Boolean,
    chosen: Boolean,
    description: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const characterStore = useCharacterStore()
    const checked = ref(props.chosen || false)
    const popoverBtn = ref(null)
    let popoverInstance = null
    let popoverOpen = false

    watch(
      () => props.chosen,
      (newVal) => {
        checked.value = newVal
      },
    )

    const displayCost = computed(() => {
      const absValue = Math.abs(props.value)
      return `${props.advantage ? '-' : '+'}${absValue} UP`
    })

    const costClass = computed(() => {
      return props.advantage ? 'text-danger' : 'text-success'
    })

    const statChange = () => {
      characterStore.toggleAdvantage(props.name)
    }

    const hideAllPopovers = (event) => {
      // Don't close if clicking on the popover button itself or inside a popover
      if (
        popoverBtn.value &&
        (popoverBtn.value.contains(event.target) || event.target.closest('.popover'))
      ) {
        return
      }

      // If we have a popover instance and it's open, hide it
      if (popoverInstance && popoverOpen) {
        popoverInstance.hide()
      }
    }

    onMounted(() => {
      // Initialize Bootstrap popover with proper import
      if (popoverBtn.value) {
        try {
          popoverInstance = new Popover(popoverBtn.value, {
            html: true,
            trigger: 'focus', // Changed from 'click' to 'focus'
            content: props.description || 'No description available',
            title: props.name,
          })

          // Add event listeners for popover show/hide
          popoverBtn.value.addEventListener('shown.bs.popover', () => {
            popoverOpen = true
          })

          popoverBtn.value.addEventListener('hidden.bs.popover', () => {
            popoverOpen = false
          })

          // Add document click listener to close popovers when clicking outside
          document.addEventListener('click', hideAllPopovers)
        } catch (error) {
          console.error('Error initializing popover:', error)
        }
      }
    })

    onBeforeUnmount(() => {
      // Remove event listener when component unmounts
      document.removeEventListener('click', hideAllPopovers)

      // Destroy popover instance when component unmounts
      if (popoverInstance) {
        try {
          popoverInstance.dispose()
        } catch (error) {
          console.error('Error disposing popover:', error)
        }
      }
    })

    return {
      checked,
      displayCost,
      costClass,
      statChange,
      characterStore,
      popoverBtn,
    }
  },
}
</script>

<style scoped>
.info-btn {
  min-width: 40px;
}

/* Ensure the cost is properly displayed */
.text-danger {
  color: #dc3545;
  font-weight: 500;
}

.text-success {
  color: #198754;
  font-weight: 500;
}
</style>

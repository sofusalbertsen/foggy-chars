<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <span>{{ title }}</span>
      <span v-if="showCounter" class="badge bg-secondary">
        {{ selectedCount }}/{{ maxCount }}
      </span>
    </div>

    <!-- Selected advantages collapsable section -->
    <div v-if="hasSelectedAdvantages" class="selected-advantages">
      <div class="selected-header" @click="toggleSelectedSection">
        <span>Selected {{ isDisadvantage ? 'Disadvantages' : 'Advantages' }}</span>
        <i :class="selectedSectionOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
      </div>
      <div v-if="selectedSectionOpen" class="selected-list">
        <Advantage
          v-for="option in selectedOptions"
          :key="option.name"
          :name="option.name"
          :value="option.cost"
          :advantage="!isDisadvantage"
          :chosen="true"
          :description="option.description"
        />
      </div>
    </div>

    <div class="card-body scrollable-container">
      <div class="advantage-list">
        <Advantage
          v-for="option in unselectedOptions"
          :key="option.name"
          :name="option.name"
          :value="option.cost"
          :advantage="!isDisadvantage"
          :chosen="false"
          :description="option.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useCharacterStore } from '../stores/characterStore'
import Advantage from './Advantage.vue'

export default {
  components: {
    Advantage,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    isDisadvantage: {
      type: Boolean,
      default: false,
    },
    showCounter: {
      type: Boolean,
      default: false,
    },
    maxCount: {
      type: Number,
      default: 6,
    },
  },

  setup(props) {
    const characterStore = useCharacterStore()
    const selectedSectionOpen = ref(true)

    const isChosen = (name) => {
      return characterStore.selectedAdvantages.some((adv) => adv.name === name)
    }

    const selectedOptions = computed(() => {
      return props.options.filter((option) =>
        characterStore.selectedAdvantages.some(
          (adv) => adv.name === option.name && adv.advantage === !props.isDisadvantage,
        ),
      )
    })

    const unselectedOptions = computed(() => {
      return props.options.filter(
        (option) =>
          !characterStore.selectedAdvantages.some(
            (adv) => adv.name === option.name && adv.advantage === !props.isDisadvantage,
          ),
      )
    })

    const hasSelectedAdvantages = computed(() => {
      return selectedOptions.value.length > 0
    })

    const selectedCount = computed(() => {
      if (props.isDisadvantage) {
        return characterStore.standardDisadvantages.length
      }
      return props.options === characterStore.specialAdvantages
        ? characterStore.specialAdvantages.length
        : characterStore.standardAdvantages.length
    })

    const toggleSelectedSection = () => {
      selectedSectionOpen.value = !selectedSectionOpen.value
    }

    return {
      characterStore,
      isChosen,
      selectedCount,
      selectedOptions,
      unselectedOptions,
      hasSelectedAdvantages,
      selectedSectionOpen,
      toggleSelectedSection,
    }
  },
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.card-body.scrollable-container {
  max-height: 400px;
  overflow-y: auto;
  padding-top: 0;
}

.advantage-list {
  padding-top: 10px;
}

.selected-advantages {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #f8f9fa;
}

.selected-header {
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.selected-header:hover {
  background-color: #e9ecef;
}

.selected-list {
  padding: 0.5rem 1rem;
}
</style>

<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center"></div>
    <span>{{ title }}</span>
    <span v-if="showCounter" class="badge bg-secondary"> {{ selectedCount }}/{{ maxCount }} </span>
  </div>
  <div class="card-body">
    <Advantage
      v-for="option in options"
      :key="option.name"
      :name="option.name"
      :value="option.cost"
      :advantage="!isDisadvantage"
      :chosen="isChosen(option.name)"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
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

    const isChosen = (name) => {
      return characterStore.selectedAdvantages.some((adv) => adv.name === name)
    }

    const selectedCount = computed(() => {
      if (props.isDisadvantage) {
        return characterStore.standardDisadvantages.length
      }
      return props.options === characterStore.specialAdvantages
        ? characterStore.specialAdvantages.length
        : characterStore.standardAdvantages.length
    })

    return {
      characterStore,
      isChosen,
      selectedCount,
    }
  },
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>

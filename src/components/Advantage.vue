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
    <label class="form-control" :for="name">{{ name }}</label>
    <button type="button" class="btn btn-outline-secondary" data-toggle="tooltip" :title="tooltip">
      ?
    </button>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

export default {
  props: {
    name: String,
    value: Number,
    advantage: Boolean,
    chosen: Boolean,
  },

  setup(props) {
    const characterStore = useCharacterStore()
    const checked = ref(props.chosen || false)

    watch(
      () => props.chosen,
      (newVal) => {
        checked.value = newVal
      },
    )

    const tooltip = computed(() => {
      return props.advantage
        ? `${props.name} koster ${props.value} UP`
        : `${props.name} giver ${props.value} UP`
    })

    const statChange = () => {
      characterStore.toggleAdvantage(props.name)
    }

    return {
      checked,
      tooltip,
      statChange,
      characterStore,
    }
  },
}
</script>

<style></style>

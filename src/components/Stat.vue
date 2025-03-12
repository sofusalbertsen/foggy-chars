<template>
  <div class="col">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default" :title="stat.longName">
          {{ stat.name }}</span
        >
      </div>
      <input
        type="number"
        class="form-control mb-3"
        :id="stat.statname"
        v-model="value"
        @input="statChange"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

export default {
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const characterStore = useCharacterStore()
    const value = ref(props.stat.statValue)
    const valueRef = ref(props.stat.statValue)

    const statChange = () => {
      const subtractionPoints = valueRef.value - value.value
      valueRef.value = value.value
      characterStore.modifyUP(subtractionPoints)
      characterStore.updateStat(props.stat.name, value.value)
    }

    watch(
      () => props.stat.statValue,
      (newVal) => {
        value.value = newVal
        valueRef.value = newVal
      },
    )

    return {
      value,
      valueRef,
      statChange,
      characterStore,
    }
  },
}
</script>

<style></style>

<template>
  <div class="col-sm-4">
    <label :for="fieldname" class="form-label">{{ fieldname }}</label>
    <input
      type="text"
      class="form-control"
      :id="fieldname"
      placeholder=""
      v-model="inputValue"
      @input="updateValue"
      required=""
    />
    <div class="invalid-feedback">Valid {{ fieldname }} is required.</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

export default {
  props: ['fieldname', 'text'],

  setup(props) {
    const characterStore = useCharacterStore()
    const inputValue = ref('')

    const updateValue = () => {
      // Convert fieldname to a key that can be used in the store
      const fieldKey = props.fieldname.toLowerCase().replace(/\s+/g, '')
      characterStore.updateCharacterInfo(fieldKey, inputValue.value)
    }

    return {
      inputValue,
      updateValue,
      characterStore,
    }
  },
}
</script>

<style></style>

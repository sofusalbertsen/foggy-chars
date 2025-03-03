<template>
  <div class="col-md-2">
    <button type="button" class="btn btn-secondary">
      UP points remaining
      <span class="badge bg-light text-dark">{{ characterStore.upPoints }}</span>
    </button>
  </div>
</template>

<script>
import { useCharacterStore } from '../stores/characterStore'

export default {
  setup() {
    const characterStore = useCharacterStore()
    return {
      characterStore,
    }
  },
}
</script>

<style></style>

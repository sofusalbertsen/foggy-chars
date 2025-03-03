<template>
  <div>{{ characterStore.calculateHP }}</div>
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

<template>
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-header">Race</div>
      <div class="card-body">
        <div class="race-selector">
          <div class="form-group">
            <label for="race-category">Category:</label>
            <select id="race-category" v-model="selectedCategory" class="form-control mb-2">
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="race-selection">Race:</label>
            <select
              id="race-selection"
              v-model="selectedRace"
              class="form-control"
              :disabled="!currentRaces.length"
            >
              <option value="">-- Select a race --</option>
              <option v-for="race in currentRaces" :key="race" :value="race">
                {{ race }}
              </option>
            </select>
          </div>

          <div v-if="showDescription" class="mt-3 race-description">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useCharacterStore } from '../stores/characterStore'
import { getRaces } from '../data/races'

export default {
  setup() {
    const characterStore = useCharacterStore()
    const races = getRaces()
    const selectedCategory = ref('pc')
    const selectedRace = ref('')

    const categories = computed(() => [
      { id: 'pc', name: 'PC Races' },
      { id: 'specialPC', name: 'Special PC Races' },
      { id: 'npcIntelligent', name: 'NPC - Intelligent' },
      { id: 'npcAnimalistic', name: 'NPC - Animalistic' },
      { id: 'undead', name: 'Undead' },
      { id: 'astral', name: 'Astral/Dream Beings' },
    ])

    const currentRaces = computed(() => {
      return races[selectedCategory.value] || []
    })

    const description = computed(() => {
      if (selectedCategory.value === 'pc') {
        return 'Standard playable races found throughout the Foggy Valley.'
      } else if (selectedCategory.value === 'specialPC') {
        return 'Unusual but still playable races, requiring DM approval.'
      } else {
        return 'These races are typically not playable characters and are usually controlled by the DM.'
      }
    })

    const showDescription = computed(() => selectedCategory.value !== '')

    return {
      characterStore,
      selectedCategory,
      selectedRace,
      categories,
      currentRaces,
      description,
      showDescription,
    }
  },
}
</script>

<style scoped>
.race-selector {
  width: 100%;
}
.race-description {
  font-size: 0.9rem;
  color: #666;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  border-left: 3px solid #ddd;
}
</style>

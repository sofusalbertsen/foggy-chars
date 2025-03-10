<template>
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-header">Race</div>
      <div class="card-body">
        <!-- Display mode -->
        <div v-if="!editMode && selectedRace" class="race-display">
          <span class="selected-race">{{ selectedRace }}</span>
          <button
            @click="toggleEditMode"
            class="btn btn-sm btn-outline-secondary edit-button"
            title="Edit race"
          >
            <i class="fas fa-pen"></i> Edit
          </button>
        </div>

        <!-- Edit mode -->
        <div v-if="editMode || !selectedRace" class="race-selector">
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

          <div v-if="selectedRace" class="mt-3 text-end">
            <button @click="toggleEditMode" class="btn btn-sm btn-primary">Done</button>
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
    const editMode = ref(!selectedRace.value)

    const toggleEditMode = () => {
      editMode.value = !editMode.value
    }

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
      editMode,
      toggleEditMode,
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
.race-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.selected-race {
  font-size: 1.1rem;
  font-weight: 500;
}
.edit-button {
  padding: 0.25rem 0.5rem;
}
</style>

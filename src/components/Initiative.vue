<template>
  <div class="initiative-component">
    <div class="card">
      <div class="card-header">Initiative</div>
      <div class="card-body">
        <div class="row mb-2">
          <div class="col-6">
            <label for="initiativeModifier" class="form-label">Initiative Modifier:</label>
          </div>
          <div class="col-6">
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                id="initiativeModifier"
                v-model="initiativeModifier"
                @input="updateModifier"
              />
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-6">NV (Natural Value):</div>
          <div class="col-6">{{ characterStore.calculateNV }}</div>
        </div>

        <div class="row mb-2">
          <div class="col-6">HUR (Speed):</div>
          <div class="col-6">
            {{ getHurValue }}
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-6">Initiative Sum:</div>
          <div class="col-6">{{ characterStore.calculateInitiativeSum }}</div>
        </div>

        <div class="row mb-2">
          <div class="col-6">Initiative Die:</div>
          <div class="col-6">{{ characterStore.getInitiativeDescription }}</div>
        </div>

        <div class="row mt-3">
          <div class="col-12">
            <button @click="rollForInitiative" class="btn btn-primary w-100">
              Roll Initiative
            </button>
          </div>
        </div>

        <div v-if="initiativeRoll !== null" class="row mt-3">
          <div class="col-12 text-center">
            <h3>Result: {{ initiativeRoll }} segments</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

export default {
  setup() {
    const characterStore = useCharacterStore()
    const initiativeModifier = ref(characterStore.initiativeModifier)
    const initiativeRoll = ref(null)

    const getHurValue = computed(() => {
      const hur = characterStore.stats.find((s) => s.name === 'HUR')
      return hur ? hur.statValue : 0
    })

    const updateModifier = () => {
      characterStore.updateInitiativeModifier(initiativeModifier.value)
    }

    const rollForInitiative = () => {
      initiativeRoll.value = characterStore.rollInitiative()
    }

    return {
      characterStore,
      initiativeModifier,
      initiativeRoll,
      getHurValue,
      updateModifier,
      rollForInitiative,
    }
  },
}
</script>

<style>
.initiative-component {
  margin-bottom: 1rem;
}
</style>

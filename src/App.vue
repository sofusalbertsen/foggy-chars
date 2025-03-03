<template>
  <div class="container">
    <h1>Character Sheet</h1>
    <div class="row mb-3">
      <Up />
    </div>
    <div class="row mb-3">
      <Freetext fieldname="Character Name" />
      <Freetext fieldname="Race" />
      <Freetext fieldname="Occupation" />
      <Freetext fieldname="Age" />
    </div>
    <div class="row mb-3">
      <div class="col-md-8">
        <div class="row">
          <Stat v-for="stat in characterStore.stats" :key="stat.name" :stat="stat" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="card">
              <div class="card-header">Character Stats</div>
              <div class="card-body">
                <div class="row">
                  <div class="col">HP:</div>
                  <div class="col"><Hp /></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <Initiative />
          </div>
        </div>
      </div>
    </div>

    <!-- Updated advantages section -->
    <div class="row mb-3">
      <div class="col-md-6">
        <AdvantageSelector
          title="Standard Fordele"
          :options="standardAdvantages"
          :showCounter="true"
          :maxCount="characterStore.maxAdvantages"
        />
      </div>
      <div class="col-md-6">
        <AdvantageSelector
          title="Ulemper"
          :options="standardDisadvantages"
          :isDisadvantage="true"
        />
      </div>
    </div>

    <!-- Special advantages section -->
    <div class="row mb-3">
      <div class="col-md-12">
        <AdvantageSelector title="Særlige Fordele" :options="specialAdvantages" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useCharacterStore } from './stores/characterStore'
import { getStandardAdvantages, getSpecialAdvantages } from './data/advantages'
import Up from './components/Up.vue'
import Stat from './components/Stat.vue'
import Hp from './components/Hp.vue'
import Freetext from './components/Freetext.vue'
import Initiative from './components/Initiative.vue'
import AdvantageSelector from './components/AdvantageSelector.vue'

export default {
  components: {
    Up,
    Stat,
    Hp,
    Freetext,
    Initiative,
    AdvantageSelector,
  },

  setup() {
    const characterStore = useCharacterStore()

    const standardAdvantages = computed(() => {
      return getStandardAdvantages().filter((adv) => adv.advantage)
    })

    const standardDisadvantages = computed(() => {
      return getStandardAdvantages().filter((adv) => !adv.advantage)
    })

    const specialAdvantages = computed(() => {
      return getSpecialAdvantages()
    })

    return {
      characterStore,
      standardAdvantages,
      standardDisadvantages,
      specialAdvantages,
    }
  },
}
</script>

<style>
/* Your global styles here */
</style>

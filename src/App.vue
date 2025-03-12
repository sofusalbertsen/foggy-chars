<template>
  <div class="container">
    <h1>Character Sheet</h1>
    <!-- Button to toggle off-canvas -->
    <button class="btn btn-primary mb-3" type="button" @click="toggleOffcanvas">
      Toggle Character Stats
    </button>

    <div class="row mb-3">
      <Up />
    </div>
    <div class="row mb-3">
      <Freetext fieldname="Character Name" />
      <Freetext fieldname="Occupation" />
      <Freetext fieldname="Age" />
    </div>
    <div class="row mb-3">
      <RaceSelector />
    </div>
    <div class="col-md">
      <div class="row">
        <Stat v-for="stat in characterStore.stats" :key="stat.name" :stat="stat" />
      </div>
    </div>

    <!-- Off-canvas panel for Character Stats and Initiative -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="statsOffcanvas" ref="offcanvas">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Character Details</h5>
        <button
          type="button"
          class="btn-close"
          @click="toggleOffcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="card mb-3">
          <div class="card-header">Character Stats</div>
          <div class="card-body">
            <div class="row">
              <div class="col">HP:</div>
              <div class="col"><Hp /></div>
            </div>
          </div>
        </div>
        <Initiative />
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
import { computed, ref } from 'vue'
import { useCharacterStore } from './stores/characterStore'
import { getStandardAdvantages, getSpecialAdvantages } from './data/advantages'
import Up from './components/Up.vue'
import Stat from './components/Stat.vue'
import Hp from './components/Hp.vue'
import Freetext from './components/Freetext.vue'
import Initiative from './components/Initiative.vue'
import AdvantageSelector from './components/AdvantageSelector.vue'
import RaceSelector from './components/RaceSelector.vue'

export default {
  components: {
    Up,
    Stat,
    Hp,
    Freetext,
    Initiative,
    AdvantageSelector,
    RaceSelector,
  },

  setup() {
    const characterStore = useCharacterStore()
    const offcanvas = ref(null)

    const toggleOffcanvas = () => {
      const offcanvasEl = document.getElementById('statsOffcanvas')
      if (offcanvasEl.classList.contains('show')) {
        offcanvasEl.classList.remove('show')
      } else {
        offcanvasEl.classList.add('show')
      }
    }

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
      offcanvas,
      toggleOffcanvas,
    }
  },
}
</script>

<style>
/* Global styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 1.25rem;
  font-weight: bold;
}

.card-body {
  padding: 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-8,
.col-md-4,
.col-md-6,
.col-md-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-md-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.col-md-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.mb-3 {
  margin-bottom: 1rem;
}

.advantage-selector {
  margin-bottom: 1rem;
}

.advantage-selector .title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.advantage-selector .options {
  list-style: none;
  padding: 0;
}

.advantage-selector .options li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.advantage-selector .options li:last-child {
  border-bottom: none;
}

/* Off-canvas styles */
.offcanvas {
  position: fixed;
  top: 0;
  right: -320px;
  height: 100vh;
  width: 320px;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
}

.offcanvas.show {
  transform: translateX(-320px);
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.offcanvas-body {
  padding: 1rem;
}
.btn-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-close:focus {
  outline: none;
}
</style>

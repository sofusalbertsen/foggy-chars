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
          <Stat 
            v-for="stat in characterStore.stats" 
            :key="stat.name" 
            :stat="stat" 
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            Character Stats
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">HP:</div>
              <div class="col"><Hp /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Advantages</div>
          <div class="card-body">
            <Advantage 
              v-for="adv in characterStore.advantages.filter(a => a.advantage)" 
              :key="adv.name" 
              :name="adv.name" 
              :value="adv.value" 
              :advantage="adv.advantage" 
              :chosen="adv.chosen"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Disadvantages</div>
          <div class="card-body">
            <Advantage 
              v-for="adv in characterStore.advantages.filter(a => !a.advantage)" 
              :key="adv.name" 
              :name="adv.name" 
              :value="adv.value" 
              :advantage="adv.advantage"
              :chosen="adv.chosen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCharacterStore } from './stores/characterStore';
import Up from './components/Up.vue';
import Stat from './components/Stat.vue';
import Hp from './components/Hp.vue';
import Freetext from './components/Freetext.vue';
import Advantage from './components/Advantage.vue';

export default {
  components: {
    Up,
    Stat,
    Hp,
    Freetext,
    Advantage
  },
  setup() {
    const characterStore = useCharacterStore();
    
    return {
      characterStore
    };
  }
}
</script>

<style>
/* Your global styles here */
</style>

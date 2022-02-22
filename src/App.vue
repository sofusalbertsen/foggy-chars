<template>
<div class="container">
<div class="col-md-7 col-lg-8">
<h4 class="mb-3">Character</h4>
  <div class="row g-3">
    <Freetext :fieldname="firstName" text="dette er en text" />
    <Freetext :fieldname="lastName" text="dette er en  text" />
  </div>
  <div class="row">
    <Stat  v-for="stat in stats" :key="stat.name" :statname="stat.name" :stat="stat" v-model:statValue="stat.statValue" v-model:upRef="stat.upRef" @modifyUP="modifyUP" />
  </div>
    <div class="row">
        <div class="col-md-4">
          <h3> Advantages:</h3>
          <Advantage v-for="advantage in advantages" :key="advantage.name" :advantage="advantage.advantage" :name="advantage.name" :value="advantage.value" @modifyUP="modifyUP"/>
        </div>
        <div class="col-md-4">
          <h3> Disadvantages:</h3>
          <Advantage v-for="disadvantage in disadvantages" :key="disadvantage.name" :advantage="disadvantage.advantage" :name="disadvantage.name" :value="disadvantage.value" @modifyUP="modifyUP"/>
        </div>
    </div>
    <div class="row">
      <Up v-model:upPoints="upValue" />
    </div>
</div>
</div>
</template>

<script>
import Freetext from './components/Freetext.vue'
import Stat from './components/Stat.vue'
import Advantage from './components/Advantage.vue'
import Up from './components/Up.vue'

export default {
  name: 'App',
  components: {
    Freetext, Stat, Advantage, Up
  },
  data () {
    return {
      upValue: 2,
      constUp: 5,
      firstName: 'First name',
      lastName: 'Last name',
      stats: [],
      advantages: [],
      disadvantages: []
    }
  },
  created () {
    this.stats = [
      { name: 'STR', statValue: this.constUp, upRef: this.upValue },
      { name: 'SMI', statValue: this.constUp, upRef: this.upValue },
      { name: 'CHAR', statValue: this.constUp, upRef: this.upValue }
    ]
    this.advantages = [
      { name: 'Stærke tænder', advantage: true, value: 1 },
      { name: 'Lange lemmer', advantage: true, value: 3 }
    ]
    this.disadvantages = [
      { name: 'Inkompetent', advantage: false, value: 1 },
      { name: 'Glemsom', advantage: false, value: 2 }
    ]
  },
  methods: {
    modifyUP (value) {
      this.upValue = this.upValue + value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

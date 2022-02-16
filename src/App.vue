<template>
<div class="container">
<div class="col-md-7 col-lg-8">
<h4 class="mb-3">Character</h4>
  <div class="row g-3">
    <Freetext :fieldname="firstName" :text="text" />
    <Freetext :fieldname="lastName" :text="text" />
  </div>
  <div class="row">
    <Stat  v-for="stat in stats" :key="stat.name" :statname="stat.name" />
  </div>
    <div class="row">
        <div class="col-md-3">
          <h3> Advantages:</h3>
          <Advantage v-for="advantage in advantages" :key="advantage.name" :advantage="advantage.advantage" :name="advantage.name" :value="advantage.value"/>
        </div>
        <div class="col-md-3">
          <h3> Disadvantages:</h3>
          <Advantage v-for="disadvantage in disadvantages" :key="disadvantage.name" :advantage="disadvantage.advantage" :name="disadvantage.name" :value="disadvantage.value"/>
        </div>
    </div>

    <div class="col-12">
      <label for="username" class="form-label">Username</label>
      <div class="input-group has-validation">
        <span class="input-group-text">@</span>
        <input type="text" class="form-control" id="username" placeholder="Username" required="">
      <div class="invalid-feedback">
          Your username is required.
        </div>
      </div>
    </div>
</div>
</div>
</template>

<script>
import Freetext from './components/Freetext.vue'
import Stat from './components/Stat.vue'
import Advantage from './components/Advantage.vue'

export default {
  name: 'App',
  components: {
    Freetext, Stat, Advantage
  },
  data () {
    return {
      firstName: 'First name',
      lastName: 'Last name',
      stats: [],
      advantages: [],
      disadvantages: []
    }
  },
  created () {
    this.stats = [
      { name: 'STR' },
      { name: 'SMI' },
      { name: 'CHAR' }
    ]
    this.advantages = [
      { name: 'Stærke tænder', advantage: true, value: 1 },
      { name: 'Lange lemmer', advantage: true, value: 3 }
    ]
    this.disadvantages = [
      { name: 'Inkompetent', advantage: false, value: 1 },
      { name: 'Glemsom', advantage: false, value: 2 }
    ]
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

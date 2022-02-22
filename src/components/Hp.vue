<template>
  <div>{{calculateHP}}</div>
</template>

<script>
export default {
  props: {
    stats: Array
  },
  data () {
    return {
      baseHp: null,
      modifiers: [],
      hp: null
    }
  },
  created () {
    console.log(this.stats)
  },
  computed: {
    calculateHP () {
      var out = 0
      this.stats.forEach(stat => {
        if (stat.name === 'UDH') {
          out += (stat.statValue * 2)
        } else if (stat.name === 'STØ') {
          out += stat.statValue
        }
      })
      return out
    }
  }
}
</script>

<style>

</style>

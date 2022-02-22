<template>
<div class="col-md-2">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default" :title="stat.longName"> {{stat.name}}</span>
    </div>
    <input type="number" class="form-control mb-3" :id="stat.statname" :value="value" @input='statChange($event.target.value)'>
  </div>
</div>
</template>

<script>
export default {
  props: {
    upRef: Number,
    stat: {
      name: String,
      longName: String,
      statValue: Number
    }
  },
  data () {
    return {
      value: this.$props.stat.statValue,
      valueRef: null
    }
  },
  created () {
    console.log(this.$props.stat.longName)
    this.valueRef = this.value
    // console.log(this.value)
    // console.log(this.$props.statValue)
  },
  methods: {
    statChange (value) {
      this.value = value
      var substractionPoints = this.valueRef - value
      this.valueRef = value
      this.$emit('modifyUP', substractionPoints)
    }
  }
}
</script>

<style>

</style>

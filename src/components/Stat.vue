<template>
            <div class="col-md-2">
              <label :for="statname" class="form-label"> {{statname}} </label>
              <input type="number" class="form-control" :id="statname" :value="value" @input='statChange($event.target.value)'>
            </div>
</template>

<script>
export default {
  props: {
    statname: String,
    statValue: Number,
    upRef: Number,
    stat: Object
  },
  data () {
    return {
      value: this.$props.statValue,
      valueRef: null
    }
  },
  created () {
    console.log(this.$props.stat.name)
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

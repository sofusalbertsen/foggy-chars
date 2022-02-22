<template>
<div class="input-group mb-1">
    <div class="input-group-text">
      <input type="checkbox" class="form-check-input mt-0" :id="name" :value="value" :checked="checked" @click='statChange($event.target.value)'>
    </div>
      <label class="form-control" :for="name"> {{name}} </label>
      <button type="button" class="btn btn-outline-secondary" data-toggle="tooltip" :title="tooltip">?</button>

</div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
    upRef: Number,
    advantage: Boolean,
    chosen: Boolean
  },
  created () {

  },
  computed: {
    tooltip () {
      return this.$props.advantage ? (this.$props.name + ' koster ' + this.$props.value + ' UP') : (this.$props.name + ' giver ' + this.$props.value + ' UP')
    }
  },
  methods: {
    statChange (value) {
      var sendValue = this.value
      if (this.advantage) {
        sendValue = -sendValue
      }

      if (this.checked) {
        this.$emit('modifyUP', parseInt(-sendValue))
      } else {
        this.$emit('modifyUP', parseInt(sendValue))
      }
      this.checked = !this.checked
      console.log('checkked' + sendValue)
    }
  },
  data () {
    return {
      checked: false
    }
  }
}

</script>

<style>

</style>

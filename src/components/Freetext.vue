<template>
              <div class="col-sm-6">
              <label :for="fieldname" class="form-label"> {{ fieldname }} </label>
              <input type="text" class="form-control" :id="fieldname" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid {{fieldname}} is required.
              </div>
            </div>
</template>

<script>
export default {
  props: ['fieldname', 'text'],
  created () {
    console.log('Freetext: ' + this.text)
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>

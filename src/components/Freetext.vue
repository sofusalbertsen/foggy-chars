<template>
              <div class="col-sm-6">
                <h1>{{ text }}</h1>
              <label for="firstName" class="form-label"> {{ fieldname }} </label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
</template>

<script>
export default {
  props: ['fieldname', 'text'],
  created () {
    console.log(this.text)
  }
}
</script>

<style>

</style>

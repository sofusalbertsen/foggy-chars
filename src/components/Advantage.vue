<template>
            <div class="form-check">
            <input type="checkbox" class="form-check-input" :id="name">
            <label class="form-check-label" :for="name"> {{name}} </label>
            <button v-if="this.advantage" type="button" class="btn btn-outline-secondary" data-toggle="tooltip" :title="name + ' koster ' + value + ' UP'">?</button>
            <button v-if="!this.advantage" type="button" class="btn btn-outline-secondary" data-toggle="tooltip" :title="name + ' giver ' + value + ' UP'">?</button>
          </div>
</template>

<script>
export default {
  props: ['advantage', 'name', 'value'],
  created () {

  }
}

</script>

<style>

</style>

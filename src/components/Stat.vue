<template>
            <div class="col-md-2">
              <label for="{{statname}}" class="form-label"> {{statname}} </label>
              <input type="number" class="form-control" id="{{statname}}" placeholder="" min="0" max="30">
            </div>
</template>

<script>
export default {
  props: ['statname', 'number', 'group'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>

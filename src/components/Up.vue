<template>
            <div class="col-md-2">
              <button type="button" class="btn btn-secondary ">
   UP points remaining <span class="badge bg-light text-dark">{{this.$props.upPoints}}</span>
</button>
            </div>
</template>

<script>
export default {
  props: {
    upPoints: Number
  },
  data () {
    return {

    }
  },
  created () {
    console.log(this.$props.upPoints)
  }
}
</script>

<style>

</style>

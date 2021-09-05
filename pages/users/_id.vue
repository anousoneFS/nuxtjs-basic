<template>
  <div>
      <h2>this is user detail</h2>
      <p>{{id}}</p>
      <nuxt-link to="/users">go back</nuxt-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    validate({ params }){
        return params.id === '1' || params.id === '2' || params.id === '3'
    }
}
</script>

<style>

</style>
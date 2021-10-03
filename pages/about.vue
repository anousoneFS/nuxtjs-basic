<template>
  <div>
    <h2>this is about page</h2>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  head(){
    return {
      title: this.title.message || 'About'
    }
  },
  async asyncData({ $axios }){
    const title = await $axios.$get("/about");
    return {title}
  }
}
</script>

<style></style>

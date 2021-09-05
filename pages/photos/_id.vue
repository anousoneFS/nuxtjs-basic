<template>
  <center>
    <img class="image" :src="post.download_url" alt="photo detail">
    <p>Author: {{post.author}}</p>
    <a :href="post.url">{{post.url}}</a><br>
    <nuxt-link to="/photos" class="btn btn-success">back</nuxt-link>
  </center>
</template>

<script>
export default {
  data() {
    const imgID = this.$route.params.id
    return {
      id: imgID,
    }
  },
  async asyncData({$axios, params}){
      const post = await $axios.$get(`/id/${params.id}/info`);
      return {post}
  }
}
</script>

<style scoped>
.image{
    width: 300px;
}
</style>

<template>
  <div class="container">
    <h1>Photos</h1>
    <div class="photos">
      <nuxt-link
        :to="`/photos/${photo.id}`"
        v-for="photo in photos"
        :key="photo.id"
      >
        <img :src="photo.download_url" alt="photo" class="photo-item" />
        <p>{{ photo.author }}</p>
      </nuxt-link>
    </div>
    <nuxt-link to="/">back home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get("/v2/list")
    return { photos }
  },
}
</script>

<style scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>

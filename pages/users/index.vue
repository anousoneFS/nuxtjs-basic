<template>
  <div>
    <h2>this is users index</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="`/users/${item.id}`">{{ item.id }}</nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/">go home</nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[{id:1}, {id:2}, {id:3}],
    }
  }
}
</script>

<style>

</style>
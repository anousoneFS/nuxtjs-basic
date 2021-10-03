<template>
  <div>
    <h2>this is index page</h2>
    <div>
      <nuxt-link to="/about">go to About</nuxt-link>
      <nuxt-link to="/users">go to Users</nuxt-link>
      <nuxt-link to="/photos">go to Photos</nuxt-link>
    </div>
    <nuxt-content :document="post"/>
    <div v-if="loggedIn" class="links">
        <button @click="logout">Logout</button>
    </div>
    <div v-else class="links">
        <nuxt-link to='/login'>Login</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({$content}){
        const post = await $content("posts/hello").fetch();
        return {post}
    },
    data(){
        return {
            title:"this is title",
            loggedIn: this.$auth.loggedIn
        }
    },
    methods:{
        async logout(){
            await this.$auth.logout();
            this.$router.push('/login');
        }
    },
    head(){
        return {
            title:"this is index title"
        }
    }
}
</script>

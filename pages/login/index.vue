<template>
  <div class="mt-5">
    <h2>this is login page</h2>
    <center>
      <form @submit="onSubmit">
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }
      try {
        await this.$auth.loginWith("local", payload)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>

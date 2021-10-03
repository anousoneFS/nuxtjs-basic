export default {
  server: {
    port: 3000, // default: 3000
  },
  serverMiddleware: ["~/api/auth.js"],
  modules: ["@nuxt/content", "@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseURL: "http://localhost:3000/api",
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: "post",
            url: "login",
            propertyName: "token",
          },
          user: {
            method: "get",
            url: "me",
            propertyName: "user",
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: "/login",
    },
  },
  mode: "universal",
  target: "server",
  // router:{
  //   base: '/nuxtjs-example-deploy'
  // }
  head: {
    titleTemplate: "Nuxt-%s",
    title: "Nuxt.js Fundamental",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
}

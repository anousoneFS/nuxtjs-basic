export default {
    modules: ['@nuxt/content', '@nuxtjs/axios', '@nuxtjs/auth'],
    axios:{
      baseURL: 'http://localhost:12345/api',
    },
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: {
              method: 'post',
              url: "login",
              propertyName: 'token',
            },
            user: {
              method: 'get',
              url: 'me',
              propertyName: 'user'
            },
            logout: false
          }
        }
      },
      redirect: {
        login: '/login'
      }
    },
    mode: 'universal',
    target: 'server',
    router:{
      base: '/nuxtjs-example-deploy'
    }
  }
  
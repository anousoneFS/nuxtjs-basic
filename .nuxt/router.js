import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6adcc7b0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _46e9730f = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _09feeff1 = () => interopDefault(import('../pages/photos/index.vue' /* webpackChunkName: "pages/photos/index" */))
const _47c796ee = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _408b8ace = () => interopDefault(import('../pages/photos/_id.vue' /* webpackChunkName: "pages/photos/_id" */))
const _108a7cd6 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _ead6bb16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/nuxtjs-example-deploy/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6adcc7b0,
    name: "about"
  }, {
    path: "/login",
    component: _46e9730f,
    name: "login"
  }, {
    path: "/photos",
    component: _09feeff1,
    name: "photos"
  }, {
    path: "/users",
    component: _47c796ee,
    name: "users"
  }, {
    path: "/photos/:id",
    component: _408b8ace,
    name: "photos-id"
  }, {
    path: "/users/:id",
    component: _108a7cd6,
    name: "users-id"
  }, {
    path: "/",
    component: _ead6bb16,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

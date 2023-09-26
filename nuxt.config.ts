// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {
      encode: () => "41a97736ca557ba020bdfdff55e01a118b2a4f019739ddb435291ebcd5f57ebbfdd607b3534d7d67558c590474093af3fb599b7e4ee8cd1cd3a9bd7d9290d03aaad5e60671ee1db7587ae7d09dfd81bd727c2906200dde10d292949b8b614fab509bb9237af31612f3ce48d35589182d36c17b362caea67355fcf652be74ac3a"
    },
    cookieName: 'strapi_jwt'
  }
})

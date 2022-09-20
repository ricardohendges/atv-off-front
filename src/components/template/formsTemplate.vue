<template>
    <v-layout>
      <v-app>
        <headerSite/>
        <footherSite/>
        <navigatorSite/>
        <v-main>
          <v-container fluid>
            <slot></slot>
          </v-container>
        </v-main>
      </v-app>
    </v-layout>
  </template>
  
  <script>
  import headerSite from '../layout/headerSite.vue'
  import footherSite from '../layout/footerSite.vue'
  import navigatorSite from '../layout/navigatorSite.vue'
  export default {
    name: 'App',
  
    components: {
      headerSite,
      footherSite,
      navigatorSite
    },
  
    data: () => ({  }),
  }
  </script>
  
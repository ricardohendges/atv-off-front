<template>
  <v-layout>
    <v-app>
      <headerSite/>
      <footherSite/>
      <navigatorSite/>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-layout>
</template>

<script>
import headerSite from './components/layout/headerSite.vue'
import footherSite from './components/layout/footerSite.vue'
import navigatorSite from './components/layout/navigatorSite.vue'
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

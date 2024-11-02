<template>
  <v-footer app padless>
    <div class="text-center">
      Copyright (c) 2022 Ricardo Jeferson Hendges
    </div>
    <v-spacer></v-spacer>
    <div>{{ userLogado.nome }}</div>
    {{ myPlataform }}
    {{ myIP }}
  </v-footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('myIP', ['getIP']),
  },
  computed: {
    ...mapGetters('login', ['userLogado']),
    ...mapGetters('myIP', ['myIP']),
    myPlataform() {
      return navigator.userAgent;
    }
  },
  mounted() {
    this.getIP();
    console.log(navigator.platform);
  }
}
</script>
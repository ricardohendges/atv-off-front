<template>
    <v-app-bar app color="#5C2715">
        <div class="d-flex align-center">
            <v-img :src="require('../../assets/logo.png')" alt="Dass Logo" class="shrink mr-2" contain height="200"
                transition="scale-transition" width="150" />
        </div>
        <v-spacer></v-spacer>
        <div>
            <h1 class="subheading">MARATONA DE PROGRAMAÇÃO HORUS 2022</h1>
        </div>
        <v-spacer></v-spacer>
        <div>
            <h4>{{userLogado.nome}}</h4>
        </div>
        <div style="color:white">
            <v-btn icon dark color="white" @click="doLogout()" to="/login">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
export default {
    methods:{
        doLogout(){
            Cookies.remove('auth')
        }
    },
    computed: {
        ...mapGetters('dupla', ['userLogado'])
    }
}
</script>

<style>
h1, h4 {
  color: white;
}
</style>
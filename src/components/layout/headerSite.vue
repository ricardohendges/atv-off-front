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
        <div style="color:white">
            <v-btn icon dark color="white" to="/login">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<style>
h1, h3 {
  color: white;
}
</style>
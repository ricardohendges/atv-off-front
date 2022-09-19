<template>
    <v-app-bar app color="#5C2715">
        <div class="d-flex align-center">
            <v-img :src="require('../../assets/logo.png')" alt="Dass Logo" class="shrink mr-2" contain height="200"
                transition="scale-transition" width="150" />
        </div>
        <v-spacer></v-spacer>
        <div>
            <strong class="subheading">MARATONA DE PROGRAMAÇÃO HORUS 2022</strong>
        </div>
        <v-spacer></v-spacer>
        <div>
            Ricardo Hendges
            <v-btn>
                loggout
            </v-btn>
        </div>
    </v-app-bar>
</template>
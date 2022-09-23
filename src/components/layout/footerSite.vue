<template>
    <v-footer app padless>
        <div class="text-center">
            Copyright (c) 2022 Ricardo Jeferson Hendges
        </div>
        <v-spacer></v-spacer>
        <div>{{userLogado.nome}}</div>
        <v-spacer></v-spacer>
        <div class="text-righ">
            Designer: Odair Sehn
        </div>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('login', ['userLogado'])
    }
}
</script>
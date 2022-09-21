<template>
    <v-navigation-drawer v-model="drawer" v-model:rail="rail" @click="rail = false">
        <v-list>
            <v-list-item :prepend-avatar="require('../../assets/avatar.png')" :title="userLogado.nome" nav>
                <template v-slot:append>
                    <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-trending-up" title="Rank" value="rank" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-clipboard-list-outline" title="Atividades" value="question" to="/question"></v-list-item>
            <v-list-item prepend-icon="mdi-database-sync-outline" title="Submissões" value="submission" to="/submission"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item v-if="userLogado.isADM" prepend-icon="mdi-lock-outline" title="ADMIN" value="Admin" to="/submissionADM"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
    computed: {
        ...mapGetters('login', ['userLogado'])
    }
}
</script>
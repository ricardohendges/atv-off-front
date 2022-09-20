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
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
            ],
            rail: true,
        }
    },
    computed: {
        ...mapGetters('dupla', ['userLogado'])
    }
}
</script>
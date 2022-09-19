<template>
    <v-navigation-drawer v-model="drawer" v-model:rail="rail" @click="rail = false">
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                <template v-slot:append>
                    <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="question"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="rank"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" to="submission"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
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
}
</script>
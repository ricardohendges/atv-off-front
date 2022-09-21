<template>
   <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
         <v-toolbar dark color="#5C2715" title="Login" />
         <v-card-text>
            <v-form>
               <v-text-field prepend-icon="person" name="login" label="User" type="text" v-model="user"></v-text-field>
               <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="pass">
               </v-text-field>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#5C2715" @click="loginAwait()">Login</v-btn>
         </v-card-actions>
      </v-card>
   </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   data() {
      return {
         user: null,
         pass: null
      }
   },
   methods: {
      ...mapActions('login', ['doLogin']),
      loginAwait () {
         this.doLogin({user: this.user, pass: this.pass})
            .then(() => this.$router.push('/'))
      }
   }
}
</script>
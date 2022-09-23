<template>
<v-app>
   <div class="divMain">
      <div class="divImg">
         <v-img  height="100%" width="100%" cover src="../assets/background.jpg"> </v-img>
      </div>
      <div class="divLogin">
         <v-card style="height: 100%">
            <v-card-title style="text-align: center; margin-top: 20%">Faça login para continuar</v-card-title>
            <v-spacer></v-spacer>
            <v-card-text>
               <v-form style="margin-top: 15%; height: 100%;">
                  <div class="divInputs">
                     <v-text-field variant="outlined" placeholder="Digite o usuário" prepend-inner-icon="mdi-account"
                        name="login" label="User" v-model="user">
                     </v-text-field>
                     <v-spacer></v-spacer>
                     <v-text-field variant="outlined" placeholder="Digite a senha" label="Password" id="password"
                        prepend-inner-icon="mdi-lock" name="password" type="password" v-model="pass">
                     </v-text-field>
                  </div>
               </v-form>
            </v-card-text>
            <v-spacer></v-spacer>
            <div class="btnLogin">
               <v-btn style="width: 70%; height: 45px; color: white" color="#5C2715" @click="loginAwait()">Login</v-btn>
            </div>

            <div class="footer">
               <span>
                  Copyright (c) 2022 Ricardo Jeferson Hendges
               </span>
               <v-spacer></v-spacer>
               <span>
                  Designer: Odair Sehn
               </span>
            </div>
         </v-card>
      </div>
      <template>
         <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="600">
               <v-card>
                  <v-card-title class="text-h5">
                     Altere sua senha para o primeiro acesso!
                  </v-card-title>
                  <v-card-text>
                     <v-text-field variant="outlined" label="Digite a senha" id="password" prepend-inner-icon="mdi-lock"
                        name="password" type="password" v-model="newPass">
                     </v-text-field>
                     <v-spacer></v-spacer>
                     <v-text-field variant="outlined" label="Repita a senha" id="password" prepend-inner-icon="mdi-lock"
                        name="password" type="password" v-model="confirmNewPass">
                     </v-text-field>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn color="green darken-1" text @click="changePass()">
                        Confirmar
                     </v-btn>
                  </v-card-actions>
                  {{getMessage.message}}
               </v-card>
            </v-dialog>
         </v-row>
      </template>
   </div>
   </v-app>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   data() {
      return {
         user: null,
         pass: null,
         dialog: false,
         newPass: null,
         confirmNewPass: null
      }
   },
   computed: {
      ...mapGetters('message', ['getMessage']),
   },
   methods: {
      ...mapActions('login', ['doLogin']),
      ...mapActions('dupla', ['patchDuplas']),
      loginAwait() {
         this.doLogin({ user: this.user, pass: this.pass })
            .then(() => this.$router.push('/'))
            .catch((err) => {
               if (err.status == 300) this.dialog = true
            })
      },
      changePass() {
         let params = {}
         params.oldPass = this.pass
         params.User = this.user
         params.newPass = this.newPass
         params.confirmNew = this.confirmNewPass
         this.patchDuplas(params)
            .then(() => this.dialog = false)
      }
   }
}
</script>

<style scoped>
.divMain {
   display: flex;
   width: 100%;
   height: 100%;
}

.divImg {
   width: 69%;
   background: #0b0e17;
}

.divLogin {
   width: 40%;
}

.divInputs {
   display: inline-flexbox;
   align-items: center;
   justify-content: center;
   width: 95%;
}

.btnLogin {
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 10%;
}

.footer {
   margin: auto;
   width: 100%;
   bottom: 0;
   position: fixed;
   color: rgb(97, 92, 92);
   font-size: 15px;
   margin: 0 0 5px 10px;
}
</style>
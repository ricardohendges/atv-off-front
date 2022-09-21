<template>
  <v-overlay v-model="getMessage.show" contained class="align-center justify-center ">
    <v-alert dense 
             :type="getType()"
             v-model="getMessage.show"
             :title="getTitle()"
             class="align-center justify-center"
    >
      <div class="d-flex flex-row align-center justify-space-between">
        <div>
          {{getMessage.message}}
        </div>
        <div style="text-align: right; margin-left:20px">
          <v-btn id="btnClose" @click="dropMessage()" variant="outlined" icon>ok</v-btn>
        </div>
      </div>
    </v-alert>
  </v-overlay>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'showMessage',
    data: () => ({
    }),
    computed: {
        ...mapGetters('message', ['getMessage'])
    },
    methods: {
        ...mapActions('message', ['dropMessage']),
        getType() {
          return this.getMessage.type=='ERRO'? 'error' :
                 this.getMessage.type=='INFO'? 'success' : 
                 this.getMessage.type=='WARN'? 'warning' : 'success'
                 
        },
        getTitle() {
          return this.getMessage.type=='ERRO'? 'ERRO' : 
                 this.getMessage.type=='INFO'? 'INFORMAÇÃO' : 
                 this.getMessage.type=='WARN'? 'ALERTA' : 'SUCESSO'
                 
        }
    },
}
</script>
<style lang="scss" scoped>
</style>

<template>
    <formsTemplate>
        <h2>
            {{filterAtividade.atv_titulo}}
        </h2>
        <v-row>
            <v-col cols="12" md="8">
                <p style="white-space: pre-line;"> {{filterAtividade.atv_descricao}} 
                    <v-img v-if="this.$route.params.id=='D'" height="250px" src="../assets/atv_4.webp"></v-img>
                    <v-img v-if="this.$route.params.id=='E'" height="250px" src="../assets/atv_5.webp"></v-img>
                </p>
                <h3 v-if="filterAtividade.atv_entrada" > Entrada </h3>
                <div> {{filterAtividade.atv_entrada}} </div>
                <h3 v-if="filterAtividade.atv_saida"> Saida </h3>
                <div> {{filterAtividade.atv_saida}} </div>
                
                <v-row style="margin-top:10px" v-for="item in exemplos" :key="item.exe_id">
                    <v-col cols="12" md="6">
                        <!-- <v-card class="mx-auto" max-width="344" variant="outlined">
                            <v-card-item>
                                <div>
                                    <div class="text-overline mb-1">
                                        Exemplo de entrada
                                    </div>
                                    <div class="text-caption">{{item.exe_entrada}}</div>
                                </div>
                            </v-card-item>
                        </v-card> -->
                        <v-textarea auto-grow="true" no-resize rows="1" v-model="item.exe_entrada" readonly="true" background-color="light-blue"
                            color="black" label="EXEMPLO DE ENTRADA">
                        </v-textarea>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- <v-card class="mx-auto" max-width="344" variant="outlined">
                            <v-card-item>
                                <div>
                                    <div class="text-overline mb-1">
                                        Exemplo de saída
                                    </div>
                                    <div class="text-caption">{{item.exe_saida}}</div>
                                </div>
                            </v-card-item>
                        </v-card> -->
                        <v-textarea auto-grow="true" no-resize rows="1" readonly="true" v-model="item.exe_saida" background-color="light-blue"
                            color="black" label="EXEMPLO DE SAIDA">
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4">
                <v-textarea rows="20" v-model="codigo" background-color="light-blue" color="black"
                    label="Resposta">
                </v-textarea>
                <v-btn variant="outlined" @click="sendSumissao()">Enviar!</v-btn>
            </v-col>
        </v-row>
    </formsTemplate>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
import formsTemplate from '../components/template/formsTemplate.vue'

export default {
    components: {
        formsTemplate
    },
    data() {
        return {
            codigo: null,
            params: null,
            filterAtividade: {}
        }
    },
    computed: {
        ...mapGetters('atividade', ['atividades', 'exemplos'])
    },
    methods: {
        ...mapActions('atividade', ['getAtividades', 'getExemplos']),
        ...mapActions('submissao', ['postSubmissao']),
        sendSumissao() {
            let params = {}
            params.atv_id = this.filterAtividade.atv_id
            params.codigo = this.codigo
            params.status = '- in queue -'
            console.log(params)
            this.postSubmissao(params)
        }
    },
    mounted() {
        this.getAtividades()
    },
    watch: {
        atividades() {
            this.filterAtividade = this.atividades.find((a) => a.atv_code == this.$route.params.id)
        },
        filterAtividade() {
            this.getExemplos(this.filterAtividade.atv_id)
        }
    }
}
</script>
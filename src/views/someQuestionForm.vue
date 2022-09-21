<template>
    <formsTemplate>
        <h2>
            {{filterAtividade.atv_titulo}}
        </h2>
        <div>
            {{filterAtividade.atv_descricao}}
        </div>
        <h3>
            Entrada
        </h3>
        <div>
            {{filterAtividade.atv_entrada}}
        </div>
        <h3>
            Saida
        </h3>
        <div>
            {{filterAtividade.atv_saida}}
        </div>

        <v-textarea
            rows="20"
            v-model="codigo"
            background-color="light-blue"
            color="black"
            label="Código Fonte!">
        </v-textarea>
        <v-btn variant="outlined" @click="sendSumissao()">Enviar!</v-btn>
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
        ...mapGetters('atividade', ['atividades'])
    },
    methods: {
        ...mapActions('atividade', ['getAtividades']),
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
        }
    }
}
</script>
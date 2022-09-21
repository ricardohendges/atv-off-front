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
            params: null,
            filterAtividade: {}
        }
    },
    computed: {
        ...mapGetters('atividade', ['atividades'])
    },
    methods: {
        ...mapActions('atividade', ['getAtividades'])
    },
    mounted() {
        this.getAtividades()
    },
    watch: {
        atividades() {
            console.log(this.atividades)
            console.log(this.$route.params)
            this.filterAtividade = this.atividades.find((a) => a.atv_code == this.$route.params.id)
        }
    }
}
</script>
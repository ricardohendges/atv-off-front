<template>
    <formsTemplate>
        <h2>
            {{filterAtividade.titulo}}
        </h2>
        <div>
            {{filterAtividade.descricao}}
        </div>
        <h3>
            Entrada
        </h3>
        <div>
            {{filterAtividade.entrada}}
        </div>
        <h3>
            Saida
        </h3>
        <div>
            {{filterAtividade.saida}}
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
            this.filterAtividade = this.atividades.find((a) => a.code == this.$route.params.id)
        }
    }
}
</script>
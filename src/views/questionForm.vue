<template>
    <formsTemplate>
        <v-table v-if="params" density="compact">
            <thead>
                <tr>
                    <th class="text-left">
                        Code
                    </th>
                    <th class="text-left">
                        Título
                    </th>
                    <th class="text-center">
                        Dificuldade
                    </th>
                    <th class="text-center">
                        Resolvidas
                    </th>
                    <th class="text-center">
                        Status
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in atividades" :key="item.id">
                    <td>{{ item.code }}</td>
                    <td>{{ item.titulo }}</td>
                    <td class="text-center">{{ item.dificuldade }}</td>
                    <td class="text-center">{{ item.quantidade }}</td>
                    <td class="text-center">processando</td>
                    <td class="text-center">
                        <v-btn
                            :to="`/question/${item.code}`"
                            color="#5C2715"
                            size="small"
                            rounded="pill">
                            <v-icon color="white">mdi-book-open-page-variant-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
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
            listAtividades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
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
        this.params = this.$route.params
        console.log(this.params)
    },
}
</script>
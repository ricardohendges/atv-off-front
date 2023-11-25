<template>
    <formsTemplate>
        <h2>ATIVIDADES</h2>
        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-left"> Code </th>
                    <th class="text-left"> Título </th>
                    <!-- <th class="text-center"> Dificuldade </th> -->
                    <!-- <th class="text-center"> Resolvidas </th> -->
                    <th class="text-center"> Status </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in atividades" :key="item.id">
                    <td>{{ item.atv_code }}</td>
                    <td>{{ item.atv_titulo }}</td>
                    <!-- <td class="text-center">{{ item.atv_dificuldade }}</td> -->
                    <!-- <td class="text-center">{{ item.atv_quantidade }}</td> -->
                    <td class="text-center">
                        <chipRJH :status="item.atv_status"/>
                    </td>
                    <td class="text-center">
                        <v-btn
                            :to="`/question/${item.atv_code}`"
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
import chipRJH from '../components/molecula/chipRJH.vue'

export default {
    components: {
        formsTemplate, 
        chipRJH
    },
    data() {
        return {
            listAtividades: ['A', 'B', 'C', 'D', 'E']
            // listAtividades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
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
}
</script>
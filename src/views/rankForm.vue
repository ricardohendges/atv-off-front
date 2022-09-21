<template>
  <formsTemplate>
    <h2>RANK</h2>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Dupla
          </th>
          <th v-for="item in listAtividades" :key="item" class="text-center">
            <v-btn variant="text" :to="`question/${item}`">{{item}}</v-btn>
          </th>
          <th class="text-right">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rankList" :key="item.dup_id">
          <td>{{ item.dup_nome }}</td>
          <td class="text-center" v-for="itemAtv in listAtividades" :key="itemAtv" >
            {{ item.atividades.find(a=> a.atv_code == itemAtv)?.qtdeTentado }}
            <v-icon
              v-if="item.atividades.find(a=> a.atv_code == itemAtv)?.status == 'Accepted'"
              large
              color="green darken-2"
            >mdi-thumb-up</v-icon>
            <v-icon
              v-if="item.atividades.find(a=> a.atv_code == itemAtv)?.status == 'Tried'"
              large
              color="red-lighten-2"
            >mdi-thumb-down</v-icon>
          </td>
          <td>{{ item.finalizadas }}</td>
          <td>{{ item.pontos }}</td>
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
      listAtividades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }
  },
  computed: {
    ...mapGetters('rank', ['rankList'])
  },  
  methods: {
    ...mapActions('rank', ['getRank'])
  },
  mounted() {
    this.getRank()
  }
}
</script>
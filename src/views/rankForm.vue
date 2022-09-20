<template>
  <formsTemplate>
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
        <tr v-for="item in duplas" :key="item.name">
          <td>{{ item.nome }}</td>
          <td class="text-center">{{ item.id }}</td>
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
    ...mapGetters('dupla', ['duplas'])
  },  
  methods: {
    ...mapActions('dupla', ['getDuplas'])
  },
  mounted() {
    this.getDuplas()
  }
}
</script>
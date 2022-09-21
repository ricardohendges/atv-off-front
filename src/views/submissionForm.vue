<template>
  <formsTemplate>
    <h2>SUBMISSÕES</h2>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Atividade</th>
          <th class="text-left">Título</th>
          <th class="text-center">Status</th>
          <th class="text-center">Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in submissao" :key="item.sub_id">
          <td>{{ item.sub_id }}</td>
          <td>{{ item.atv_code }}</td>
          <td>{{ item.atv_titulo }}</td>
          <td class="text-center">{{ item.sub_status }}</td>
          <td class="text-center">{{ (new Date(item.sub_data)).toLocaleString() }}</td>
          <td class="text-center">
            <v-btn :to="`/question/${item.atv_code}`" color="#5C2715" size="small" rounded="pill">
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
  computed: {
    ...mapGetters('submissao', ['submissao'])
  },
  methods: {
    ...mapActions('submissao', ['getSubmissao'])
  },
  mounted() {
    this.getSubmissao()
  }
}
</script>
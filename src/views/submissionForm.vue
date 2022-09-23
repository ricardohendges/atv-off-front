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
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in submissao" :key="item.sub_id">
          <td>{{ item.sub_id }}</td>
          <td>{{ item.atv_code }}</td>
          <td>{{ item.atv_titulo }}</td>
          <td class="text-center">
            <chipRJH :status="item.sub_status"/>
          </td>
          <td class="text-center">{{ (new Date(item.sub_data)).toLocaleString() }}</td>
          <td class="text-center">
            <v-btn :to="`/question/${item.atv_code}`" color="#5C2715" size="small" rounded="pill">
              <v-icon color="white">mdi-book-open-page-variant-outline</v-icon>
            </v-btn>
            <v-btn color="#5C2715" size="small" rounded="pill" @click="showCodigo(item)">
              <v-icon color="white">mdi-eye-outline</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>


    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">
          Atividade ({{itemDialog.atv_code}}) - {{itemDialog.atv_titulo}}
        </v-card-title>
        <v-card-text>
          <div>

          </div>
          <v-textarea
            rows="20"
            readonly="true"
            v-model="itemDialog.sub_codigo"
            background-color="light-blue"
            color="black"
            label="Código Fonte!">
          </v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="#5C2715" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </formsTemplate>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import formsTemplate from '../components/template/formsTemplate.vue'
import chipRJH from '../components/molecula/chipRJH.vue'
export default {
  data() {
    return {
      dialog: false,
      itemDialog: null
    }
  },
  components: {
    formsTemplate,
    chipRJH
  },
  computed: {
    ...mapGetters('submissao', ['submissao'])
  },
  methods: {
    ...mapActions('submissao', ['getSubmissao']),
    showCodigo(item) {
      this.dialog = true
      this.itemDialog = item
    }
  },
  mounted() {
    this.getSubmissao()
  }
}
</script>
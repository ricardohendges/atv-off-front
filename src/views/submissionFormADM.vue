<template>
  <formsTemplate>
    <h2>SUBMISSÕES</h2>
    <v-select :items="statusPossiveis" multiple v-model="filterStatus" label="Novo Status Submissão"></v-select>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Atividade</th>
          <th class="text-left">Título</th>
          <th class="text-left">Dupla</th>
          <th class="text-center">Status</th>
          <th class="text-center">Data</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in localSubmissoes" :key="item.sub_id">
          <td>{{ item.sub_id }}</td>
          <td>{{ item.atv_code }}</td>
          <td>{{ item.atv_titulo }}</td>
          <td>{{ item.dup_nome }}</td>
          <td class="text-center">{{ item.sub_status }}</td>
          <td class="text-center">{{ (new Date(item.sub_data)).toLocaleString() }}</td>
          <td class="text-center">
            <v-btn :to="`/question/${item.atv_code}`" color="#5C2715" size="small" rounded="pill">
              <v-icon color="white">mdi-book-open-page-variant-outline</v-icon>
            </v-btn>
            <v-btn color="#5C2715" size="small" rounded="pill" @click="showCodigo(item)">
              <v-icon color="white">mdi-eye-outline</v-icon>
            </v-btn>
            <v-btn color="#5C2715" size="small" rounded="pill" @click="showChangeStatus(item)">
              <v-icon color="white">mdi-keyboard-return</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-dialog v-model="dialogChange">
      <v-card>
        <v-card-title class="text-h5">
          Atualizar status da atividade ({{itemDialog.atv_code}}) - {{itemDialog.atv_titulo}}
          <div>ID Submissão: {{itemDialog.sub_id}}</div>
          <div>Usuário: {{itemDialog.dup_nome}}</div>
        </v-card-title>
        <v-select :items="statusPossiveis" v-model="newStatus" label="Novo Status Submissão"></v-select>
        <v-card-text>
          <v-textarea rows="10" readonly="true" v-model="itemDialog.sub_codigo" background-color="light-blue"
            color="black" label="Código Fonte!">
          </v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="#5C2715" text @click="dialogChange = false">Fechar</v-btn>
          <v-btn color="#5C2715" text @click="sendSumissao()">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">
          Atividade ({{itemDialog.atv_code}}) - {{itemDialog.atv_titulo}}
        </v-card-title>
        <v-card-text>
          <div>
          </div>
          <v-textarea rows="20" readonly="true" v-model="itemDialog.sub_codigo" background-color="light-blue"
            color="black" label="Código Fonte!">
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
export default {
  data() {
    return {
      localSubmissoes: null,
      filterStatus: null,
      newStatus: null,
      statusPossiveis: ['- in queue -', 'Accepted', 'Wrong answer', 'Presentation error', 'Runtime error', 'Time limit exceeded'],
      dialog: false,
      dialogChange: false,
      itemDialog: null
    }
  },
  components: {
    formsTemplate
  },
  computed: {
    ...mapGetters('submissao', ['submissao'])
  },
  methods: {
    ...mapActions('submissao', ['getSubmissao', 'postSubmissao', 'patchSubmissao']),
    sendSumissao() {
      this.dialogChange = false
      let params = {}
      params.sub_id = this.itemDialog.sub_id
      params.status = this.newStatus
      this.patchSubmissao(params).then(()=> this.getSubmissao())
    },
    showCodigo(item) {
      this.dialog = true
      this.itemDialog = item
    },
    showChangeStatus(item) {
      this.dialogChange = true
      this.itemDialog = item
    }
  },
  mounted() {
    this.getSubmissao()
  },
  watch: {
    submissao(){
      this.localSubmissoes = this.submissao
    },
    filterStatus(){
      if (this.filterStatus.length)
        this.localSubmissoes = this.submissao.filter(a => this.filterStatus.includes(a.sub_status))
      else 
        this.localSubmissoes = this.submissao
    }
  }
}
</script>
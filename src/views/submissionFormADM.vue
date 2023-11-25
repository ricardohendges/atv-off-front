<template>
  <formsTemplate>
    <h2>SUBMISSÕES</h2>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select :items="statusPossiveis" multiple chips v-model="filtros.status" clearable
              label="Status Submissão" @update:model-value="aplicarFiltros()"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select :items="atividadesPoss" multiple chips v-model="filtros.atividade" clearable
              label="Atividade" @update:model-value="aplicarFiltros()"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="5">
            <v-select :items="duplasNomes" multiple v-model="filtros.dupla" label="Alunos" clearable @update:model-value="aplicarFiltros()">
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0">
                  <span>{{ item.title }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption">
                  (+{{ filtros.dupla.length - 1 }} others)
                </span>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
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
          <td class="text-center">
            <chipRJH :status="item.sub_status" />
          </td>
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
          Atualizar status da atividade ({{ itemDialog.atv_code }}) - {{ itemDialog.atv_titulo }}
          <div>ID Submissão: {{ itemDialog.sub_id }}</div>
          <div>Usuário: {{ itemDialog.dup_nome }}</div>
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
          Atividade ({{ itemDialog.atv_code }}) - {{ itemDialog.atv_titulo }}
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
import chipRJH from '../components/molecula/chipRJH.vue'
export default {
  data() {
    return {
      localSubmissoes: null,
      newStatus: null,
      statusPossiveis: ['- in queue -', 'Accepted', 'Wrong answer', 'Presentation error', 'Runtime error', 'Time limit exceeded'],
      atividadesPoss: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      dialog: false,
      dialogChange: false,
      itemDialog: null,
      filtros: { atividade: [], dupla: [], status: [] }
    }
  },
  components: {
    formsTemplate,
    chipRJH
  },
  computed: {
    ...mapGetters('submissao', ['submissao']),
    ...mapGetters('dupla', ['duplasNomes'])
  },
  methods: {
    ...mapActions('submissao', ['getSubmissao', 'postSubmissao', 'patchSubmissao']),
    ...mapActions('dupla', ['getDuplas']),
    sendSumissao() {
      this.dialogChange = false
      let params = {}
      params.sub_id = this.itemDialog.sub_id
      params.status = this.newStatus
      this.patchSubmissao(params).then(() => this.getSubmissao())
    },
    showCodigo(item) {
      this.dialog = true
      this.itemDialog = item
    },
    showChangeStatus(item) {
      this.dialogChange = true
      this.itemDialog = item
    },
    aplicarFiltros() {
      this.localSubmissoes = this.submissao.sort((a,b) => {
        if (a.atv_code > b.atv_code) return 1
        else if (a.atv_code < b.atv_code) return -1
        else return 0
      })
      if (this.filtros.status.length)
        this.localSubmissoes = this.localSubmissoes.filter(a => this.filtros.status.includes(a.sub_status))
      if (this.filtros.atividade.length)
        this.localSubmissoes = this.localSubmissoes.filter(a => this.filtros.atividade.includes(a.atv_code))
      if (this.filtros.dupla.length) {
        console.log(this.filtros.dupla)
        this.localSubmissoes = this.localSubmissoes.filter(a => {
          return this.filtros.dupla.includes(a.dup_nome)})
      }
    }
  },
  mounted() {
    this.getSubmissao()
    this.getDuplas()
  },
  watch: {
    submissao() {
      // this.localSubmissoes = this.submissao.filter(a => a.atv_code == 'A')
      this.localSubmissoes = this.submissao
    },
    filtros() {
      this.aplicarFiltros()
    },
  }
}
</script>
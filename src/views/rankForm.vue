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
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td class="text-center">{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </formsTemplate>
</template>

<script>
import formsTemplate from '../components/template/formsTemplate.vue'
export default {
  components: {
    formsTemplate
  },
  data() {
    return {
      listAtividades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      desserts: [
        {
          name: 'DJONATAN WILLENZ && IAN RAFAEL SCHMIDT',
          calories: 159
        },
        {
          name: 'FABIO WRZESINSKI && JOÃO VITOR MALLMANN',
          calories: 237,
        },
        {
          name: 'GABRIEL LUIZ KUNZ',
          calories: 262,
        },
        {
          name: 'GUILHERME GUTH ZAHN',
          calories: 305,
        }
      ],
    }
  },
}
</script>
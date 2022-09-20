import { createRouter, createWebHistory } from 'vue-router'
import questions from '../views/questionForm.vue'
import rank from '../views/rankForm.vue'
import submission from '../views/submissionForm.vue'

const routes = [
    { path: '/rank',         name: 'rank',         component: rank },
    { path: '/submission',   name: 'submission',   component: submission },
    { path: '/question',     name: 'question',     component: questions },
    { path: '/question/:id', name: 'someQuestion', component: questions }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import questions from '../views/questionForm.vue'
import someQuestions from '../views/someQuestionForm.vue'
import rank from '../views/rankForm.vue'
import submission from '../views/submissionForm.vue'
import login from '../views/loginForm.vue'
import store from '@/store'

const validateLogin = async (_to, _from, next) => {
    try {
        await store.dispatch('dupla/getProfile')
        next()
    } catch (err) {
        next('/login')
    }
}

const routes = [
    { path: '/login',        name: 'login',        component: login      },
    { path: '/',             name: 'rank',         component: rank,       beforeEnter: validateLogin},
    { path: '/submission',   name: 'submission',   component: submission, beforeEnter: validateLogin},
    { path: '/question',     name: 'question',     component: questions,  beforeEnter: validateLogin},
    { path: '/question/:id', name: 'someQuestion', component: someQuestions,  beforeEnter: validateLogin},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
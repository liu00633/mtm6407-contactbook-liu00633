import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewContact from '../views/ViewContact.vue'
import NewContact from '../views/NewContact.vue'
import EditContact from '../views/EditContact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact/:id', component: ViewContact },
  { path: '/new', component: NewContact },
  { path: '/edit/:id', component: EditContact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

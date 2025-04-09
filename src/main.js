import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import { saveContacts, getContacts } from './utils/localStorage'

if (getContacts().length === 0) {
  saveContacts([
    {
      id: '1',
      firstName: 'Alice',
      lastName: 'lin',
      email: 'alice@example.com'
    },
    {
      id: '2',
      firstName: 'dutte',
      lastName: 'Brian',
      email: 'brian@example.com'
    },
    {
      id: '3',
      firstName: 'lee',
      lastName: 'Caroline',
      email: 'caroine@example.com'
    }
  ])
}



createApp(App).use(router).mount('#app')

<template>
    <div>
      <input
        v-model="query"
        placeholder="Search by name..."
        class="form-control mb-4"
      />
      <ContactList :contacts="filteredContacts" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import ContactList from '../components/ContactList.vue'
  import { getContacts } from '../utils/localStorage'
  
  const query = ref('')
  const contacts = ref(getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName)))
  
  const filteredContacts = computed(() =>
    contacts.value.filter(c => {
      const name = (c.firstName + ' ' + c.lastName).toLowerCase()
      return name.includes(query.value.toLowerCase())
    })
  )
  </script>
  
<template>
    <div>
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <div class="mt-3">
        <router-link class="btn btn-secondary me-2" :to="`/edit/${contact.id}`">Edit</router-link>
        <button class="btn btn-danger" @click="handleDelete">Delete</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { getContact, deleteContact } from '../utils/localStorage'
  
  const router = useRouter()
  const route = useRoute()
  const contact = ref(getContact(route.params.id))
  
  function handleDelete() {
    deleteContact(contact.value.id)
    router.push('/')
  }
  </script>
  
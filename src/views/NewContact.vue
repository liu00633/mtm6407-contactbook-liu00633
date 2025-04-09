<template>
    <div>
      <h2>Add Contact</h2>
      <ContactForm @submitContact="handleSubmit" />
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { addContact } from '../utils/localStorage'
  import ContactForm from '../components/ContactForm.vue'
  import { v4 as uuidv4 } from 'uuid'
  
  const router = useRouter()
  
  function handleSubmit(data) {
    addContact({ ...data, id: uuidv4() })
    router.push(`/contact/${data.id}`)
  }
  </script>
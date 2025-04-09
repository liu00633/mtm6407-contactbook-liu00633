<template>
    <div>
      <h2>Edit Contact</h2>
      <ContactForm :initialData="contact" @submitContact="handleSubmit" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { getContact, updateContact } from '../utils/localStorage'
  import ContactForm from '../components/ContactForm.vue'
  
  const router = useRouter()
  const route = useRoute()
  const contact = ref(getContact(route.params.id))
  
  function handleSubmit(data) {
    updateContact(data)
    router.push(`/contact/${data.id}`)
  }
  </script>
  
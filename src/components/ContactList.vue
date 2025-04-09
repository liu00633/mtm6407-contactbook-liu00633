<template>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="contact in contacts" :key="contact.id">
        <router-link class="text-decoration-none" :to="`/contact/${contact.id}`">
          <div class="card p-3">
            <h5>{{ contact.firstName }} {{ contact.lastName }}</h5>
            <p class="mb-0">{{ contact.email }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['contacts'])
  </script>
  
  
<template>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">First Name</label>
        <input class="form-control" v-model="form.firstName" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name</label>
        <input class="form-control" v-model="form.lastName" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" v-model="form.email" required />
      </div>
      <button class="btn btn-success" type="submit">Save</button>
    </form>
  </template>
  
  <script setup>
  import { reactive, toRefs, watchEffect } from 'vue'
  import { defineEmits, defineProps } from 'vue'
  
  const emit = defineEmits(['submitContact'])
  const props = defineProps({ initialData: Object })
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    ...(props.initialData || {})
  })
  
  function submit() {
    emit('submitContact', form)
  }
  </script>
  
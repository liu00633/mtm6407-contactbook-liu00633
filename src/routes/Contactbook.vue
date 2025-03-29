<script setup>
import { useRoute } from 'vue-router';
import { contactbookData } from '../data'; 

const route = useRoute();
const contactbookId = parseInt(route.params.id);
const contactBook = contactbookData.find((item) => item.id === contactbookId);
</script>

<template>
  <div class="contact-item-section">
    <img :src="contactBook.image" :alt="contactBook.title" width="800" height="600">
    <div class="contact-text">
      <h2>{{ contactBook.title }}</h2>
      <p>{{ contactBook.description }}</p>
      <ul class="categories">
        <li v-for="category in contactBook.category" :key="category">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contact-item-section {
  display: flex;
  align-items: center;  /* Align items vertically in the center */
  gap: 20px;
  max-width: 1400px;
  margin: 20px auto; /* Center the section */
}

.contact-text {
  max-width: 600px; /* Prevent text from spreading too wide */
}

h2 {
  margin: 0;
  padding: 0;
}

.categories {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
}

.categories li {
  background-color: green;
  border-radius: 25px;
  padding: 4px 8px;
  color: white;
}

</style>

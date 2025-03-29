<script setup>

import { contactbookData } from '../data/index.js';
import { RouterLink } from 'vue-router';

const contactBooks = contactbookData;

</script>

<template>

<ul>
    <li v-for="contactBook in contactBooks">
        <RouterLink :to="`/contactbook/${contactBook.id}`">
            <img :src="contactBook.image" :alt="contactBook.title" width="300" height="300" />
            <h3>{{ contactBook.title }}</h3>
            <p>{{ contactBook.description }}</p>
        </RouterLink>
        <ul class="categories">
            <li v-for="category in contactBook.category"> 
             {{category}}
            </li>
        </ul>
    </li>
</ul>

</template>

<style>
ul{
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    gap: 20px;

}

ul li img{
    border-radius: 6px;
}
li h3{
    margin: 0;
    padding: 0;
    font-size:15px;
}

li a{
  text-decoration:none;
  color:#000;
}
 </style>
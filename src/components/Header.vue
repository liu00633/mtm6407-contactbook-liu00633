<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>

<nav>
    <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
   
</ul>
</nav>

</template>

<style scoped>

nav{
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  width: 100%;
  margin: 0;
  padding: 0;
}

nav ul{
    list-style: none;
    display: flex;
    gap: 24px;
}

nav a{
    color: plum;
    text-decoration: none;
}

nav a.router-link-active{
    color: lightcoral;
    font-weight: bold;
}


</style>
<template>
  <div id="app">
    <Nav></Nav>
    <router-view>
    <Home></Home>
    </router-view>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Home,
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body{
  background-color: #f9f9f9;
  scroll-behavior: smooth;
}
</style>

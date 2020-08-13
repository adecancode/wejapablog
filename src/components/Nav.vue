<template>
  <div class="container">
  <nav class="navbar">
  <a class="navbar-brand mx-auto" href="/">
    <img src="../assets/logo.png" width="50" height="50" alt="" loading="lazy">
  </a>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.navbar-brand{
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #63c063;
}
.navbar-brand > img{
  margin-right: 5px;
}
</style>

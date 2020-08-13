<template>
  <div class="container bot">
    <h3 class="header">Recent Blogs</h3>
    <div class="card top" v-for="blog in blogs" :key="blog.id">
  <div class="bottom">
    <div class="card">
      <div class="card-body">
        <p class="card-text">{{ blog.title | capitalize }}</p>
        <router-link :to="{ name: 'Post', params: { id: blog.id } }" class="btn">View Post</router-link>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      blogs: []
    }
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.blogs = res.data;
    }
    catch (e) {
      console.error(e);
    }
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<style scoped>
.header{
  color: #63c063;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
}
.top{
  margin-top: 1.5rem;
}
.bot{
  margin-bottom: 3rem;
  margin-top: 3rem;
}
.card-text{
  color: #151515;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
}
.btn{
  background: #63c063;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.btn:hover{
  color: #fff;
}

@media (max-width: 900px) {
  .bottom{
    margin: 1rem;
  }
  .top{
    margin-top: 0;
}
}
</style>
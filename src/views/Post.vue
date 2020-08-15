<template>
  <div class="container top">
    <div class="post">
      <h1 class="txt-1">{{ post.title | capitalize }}</h1>

      <img src="https://source.unsplash.com/random/1000x600" alt="post-img">

      <p class="txt-2">{{ post.body | capitalize }}</p>
    </div>
    <div class="icon">
      <p class="comment"><svg width="50" height="50" viewBox="0 0 33 33" fill="000" class="q" aria-label="responses"><path clip-rule="evenodd" d="M24.28 25.5l.32-.29c2.11-1.94 3.4-4.61 3.4-7.56C28 11.83 22.92 7 16.5 7S5 11.83 5 17.65s5.08 10.66 11.5 10.66c1.22 0 2.4-.18 3.5-.5l.5-.15.41.33a8.86 8.86 0 0 0 4.68 2.1 7.34 7.34 0 0 1-1.3-4.15v-.43zm1 .45c0 1.5.46 2.62 1.69 4.44.22.32.01.75-.38.75a9.69 9.69 0 0 1-6.31-2.37c-1.2.35-2.46.54-3.78.54C9.6 29.3 4 24.09 4 17.65 4 11.22 9.6 6 16.5 6S29 11.22 29 17.65c0 3.25-1.42 6.18-3.72 8.3z"></path></svg>
      ({{ total }})</p>
    </div>

    <div class="comments" >
      <div class="form-row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control" name="name" id="name" v-model="details.name" placeholder="Name" required>
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" name="comment" id="comment" v-model="details.body" placeholder="Comment" required>
        </div>
        <div class="form-group col-md-6">
          <button @click.prevent="addComments" class="button">Comment</button>
        </div>
    </div>

    <hr>

    <section>
        <div class="card topper" v-for="comment in comments" :key="comment.id">
          <div class="card-body">
          <p class="card-head">{{ comment.name | capitalize }}</p>
          <p class="card-sub">{{ comment.body | capitalize }}</p>
          </div>
        </div>
    </section>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return {
            id: this.$route.params.id,
            post: {},
            comments: [],
            commentIs: false,
            details: {
                name: "",
                body: ""
            },
            total: 5
        }
    },
    created(){
        this.getPosts(),
        this.getComments()
    },
    methods: {
        getPosts(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(
            response=> response.json()
        ).then(
            data => this.post = data
            )
        },
        getComments(){
            this.$http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.id).then(
                response => response.json()
            ).then(
                data => {this.comments = data
                console.log(this.comments)}
            )
        },
        addComments(){
            if (this.details.name && this.details.body){
                this.comments.push(this.details)
                this.details = {}
                this.total++
            }
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
.top{
  margin-bottom: 4rem;
  margin-top: 4rem;
}
.post{
  text-align: center;
  overflow: hidden;
}
.post > img{
  max-width: 1000px;
}
.txt-1{
  color: #63c063;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 4rem;
}
.txt-2{
  color: #151515;
  font-weight: 600;
  text-align: left;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  margin-top: 4rem;
}
.comment{
  color: #151515;
  font-weight: 400;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}
.topper{
  margin: 2rem;
}
hr{
  background: #63c06367;
  margin-bottom: 4rem;
  margin-top: 4rem;
}
.card-head{
  color: #63c063;
  font-weight: bold;
  text-align: left;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
}
.card-sub{
  font-family: 'Poppins', sans-serif;
  color: #151515;
}
.comments{
  margin-top: 4rem;
}

.icon{
  margin: 2rem 0;
}
input{
  font-family: 'Poppins', sans-serif;
}
::placeholder{
  font-family: 'Poppins', sans-serif;
}
button{
  color: #fff;
  background-color: #63c063;
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}
</style>

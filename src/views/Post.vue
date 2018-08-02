<template>
  <div class="post container" v-if="post">
    <h3>{{post.title}}</h3>
    <div>
      <p>
        {{post.text}}
      </p>
    </div>
    <p>
      post id = {{post.id}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'post',
  data: () => ({
    post: null,
    posts: null
  }),
  methods: {
    getPost: function() { 
      this.$http.get('http://localhost:9000/api/tiles').then((response) => { 
        if(response) {
          let postId = this.$route.params.id
          for(let i of response.body.tiles) {
            if(i.id === parseInt(postId)) {
              this.post = i
            }
          }
        }
      }, (response) => {
        console.log('response')
      })
    }
  },
  created () {
    this.getPost()
  }
}
</script>

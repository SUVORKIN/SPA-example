<template>
  <router-link 
    :to="'/post' + _post.id">
    <h3>{{_post.title}}</h3>
    <p>{{_post.description}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'card',
  props: {
    _post: Object
  }
}
</script>

<style scoped>
 a {
  color: #fff;
}
</style>

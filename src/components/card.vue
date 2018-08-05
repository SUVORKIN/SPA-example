<template>
  <router-link 
    :to="'/post' + _post.id">
    <div class="card__content">
      <h3>{{_post.title}}</h3>
    <p>{{_post.description}}</p>
    </div>
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
.card__content {
  padding: 3px 3px 3px 5px;
}
</style>

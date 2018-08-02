<template>
  <header class="navigation-header">
      <nav class="navigation-header__menu">
        <router-link class="navigation-header__link" to="/">Home</router-link>
        <router-link class="navigation-header__link" to="/about">About</router-link>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'navigationHeader'
}
</script>

<style scoped>
.navigation-header {
  background-color: #1E88E5;
  padding: 0 30px;
}
.navigation-header a {
  color: #fff;
}
.navigation-header__link {
  padding: 10px;
}
.navigation-header__link:hover{
  background-color: #1e6baf;
}
.navigation-header__menu {
  display: flex;
}
</style>


<template>
  <div id="app">
    <navigationHeader />
    <main>
      <router-view/>
    </main>
    <futer/>
  </div>
</template>

<script>
import navigationHeader from 'components/navigationHeader.vue'
import futer from 'components/footer.vue'

export default {
  name: 'exam1',
  components: {
    navigationHeader,
    futer
  }
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
a {
  text-decoration: none;
}
.container {
  padding: 30px;
}
</style>

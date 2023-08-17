<template>
  <div class="container">
    <titleBanner/>
    <contactBody/>
  </div>
</template>

<script>

import titleBanner from "./components/titleBanner.vue";
import contactBody from "./components/contactBody.vue";

export default {
  name: 'App',
  components: {
    titleBanner,
    contactBody
  }
}
</script>

<style>
#app {
  .container {
    font-family: Montserrat, sans-serif;
    background-color: #F7E7CE;
    width: 1440px;
    max-width: 80%;
    min-width: 580px;
    margin: 30px auto;
  }
}
</style>

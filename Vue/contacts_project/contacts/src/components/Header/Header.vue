<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-bright-blue">
    <a class="navbar-brand" href="#">
      <img id="logo" src="../../assets/images/Contacts-logos/Contacts-logos_transparent.png" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-fill w-100">
        <RouterLink class="nav-link active" to="/">Contacts <span class="sr-only">(current)</span></RouterLink>
        <RouterLink class="nav-link" to="#">Add contact</RouterLink>
        <RouterLink class="nav-link" to="#">List contacts</RouterLink>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
#logo{
  width: 70px;
  height: 70px;
}
.nav-link{
  font-size: large;
}
.nav-link:focus, .nav-link:hover{
  font-size: larger;
  font-weight: bolder;
}
.nav-link.active{
  background-color: #ffffff;
  border-radius: 8px;
  font-size: larger;
  font-weight: bolder;
}
//.bg-bright-blue{
//  background-color: #00ABE4;
//  border-radius: 10px;
//  font-size: large;
//}
</style>
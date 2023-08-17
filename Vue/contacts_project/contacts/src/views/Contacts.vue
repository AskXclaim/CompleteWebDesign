<script setup>

</script>

<template>
  <div class="row m-2 align-items-center">
    <div class="col-12">
      <RouterLink class="btn btn-bright-blue m-1"
                  to="/AddContact">
        Add a contact
      </RouterLink>
    </div>
    <div class="col-12">
      <RouterLink class="btn btn-bright-blue m-1"
                  to="/ListContacts">
        List Contacts
      </RouterLink>
    </div>
    <div class="col-12">
      <RouterLink class="btn btn-bright-blue m-1"
                  to="/FindContact">
        Find Contact
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.row {
  background-color: #ffffff;
  border-radius: 10px;
  height: 200px;

  .col-12 .btn {
    width: 200px;
    min-width: 200px;
  }

  .btn-bright-blue {
    color: #fff;
    background-color: #00ABE4;
    border-color: #00ABE4;
  }

  .btn-bright-blue:focus,.btn-bright-blue:hover {
    color: #fff;
    font-weight: bolder;
    background-color: #018fbc;
    border-color: #1cc9f1;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
}

</style>
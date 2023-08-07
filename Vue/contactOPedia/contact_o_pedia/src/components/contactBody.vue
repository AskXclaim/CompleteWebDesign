<template>
  <div class="contact-entry">
    <form action="">
      <div class="address-item">
        <label for="firstName">First Name:</label>
        <input id="firstName" name="firstName" type="text" placeholder="First name"/>
      </div>
      <div class="address-item">
        <label for="lastName">Last Name:</label>
        <input id="lastName" name="lastName" type="text" placeholder="Last name"/>
      </div>
      <div class="address-item">
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" placeholder="email"/>
      </div>
      <div class="address-submit">
        <button id="submitContact" name="submitContact" type="submit" value="Submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>
<style lang="scss">
.contact-entry {
  display: flex;
  flex-direction: column;
  width: 400px;

  .address-item {
    width: 100%;
  }

  input[type="text"], input[type="email"] {
    height: 20px;
    width: 200px;
    max-width: 70%;
    border-radius: 5px;
    margin: 5px;
  }

  label {
    display: inline-block;
    height: 20px;
    width: 100px;
    margin: 0 5px;
  }

  .address-submit {
    width: 80%;
    text-align: end;
    margin: 10px 5px 10px 0;

    #submitContact {
      border-radius: 5px;
      width: 60px;
      height: 30px;
      padding: 5px;
      font-weight: bold;
    }
  }
}
</style>
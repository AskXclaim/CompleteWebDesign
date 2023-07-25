<template>
  <div class="container">
    <section class="question-section">
      <div class="question">
        <h1>Question one</h1>
      </div>
    </section>
    <section class="answers-section">
      <div class="answers">Answer section</div>
    </section>
    <section class="controls-section">
      <div class="controls">controlls</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    box-sizing: border-box;
    background-color: #ffffff;
    margin: 40px auto;
    width: 1044px;
    max-width: 80%;
    min-width: 520px;
  }

  .question-section {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .question {
    background-color: #93a6ad;
    height: 100%;
    width: 100%;
  }

  .question h1 {
    margin: 33px auto;
    letter-spacing: 1px;
  }

  .answers-section {
    background-color: #eef7fb;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .controls-section {
    background-color: #93a6ad;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>

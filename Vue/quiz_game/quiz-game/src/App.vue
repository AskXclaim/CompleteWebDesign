<template>
  <div v-if="this.isErrorPresent" class="container error">
    <span v-html="this.error"></span>
  </div>
  <div v-if="!this.isErrorPresent" class="container">
    <section class="question-section">
      <div class="question">
        <h1 v-html="this.question"></h1>
      </div>
    </section>
    <section class="answers-section">
      <div class="answers">
        <span>Answers</span>
      </div>
    </section>
    <section class="controls-section">
      <div class="controls">controlls</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api: "https://opentdb.com/api.php?amount=1",
      question: undefined,
      displayedAnswers: undefined,
      selectedAnswer: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      isErrorPresent: false,
      error: undefined,
    };
  },
  methods: {
    getQuestion() {
      this.axios.get(this.api).then((response) => {
        if (!response.data || response.data.response_code !== 0) {
          this.isErrorPresent = true;
          this.error = `An error occurred. No question was gotten, please try again later`;
          return;
        }

        const dataResult = response.data?.results[0];
        this.question = dataResult.question;
        this.correctAnswer = dataResult.correct_answer;
        this.incorrectAnswers = dataResult.incorrect_answers;
        console.log(response.data);
      });
    },
  },
  created() {
    this.getQuestion();
  },
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

  .error {
    width: 100%;
    color: #ad828c;
    font-size: 26px;
    font-weight: bolder;
    letter-spacing: 0.5px;
  }

  .container {
    box-sizing: border-box;
    background-color: #ffffff;
    margin: 40px auto;
    width: 1044px;
    max-width: 80%;
    min-width: 520px;
  }

  .question-section {
    display: flex;
    flex-direction: row;
    background-color: #93a6ad;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .question {
    padding: 0 10px;
    height: 100%;
    width: 65ch;
    letter-spacing: 0.5px;
    line-height: 2.2em;
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

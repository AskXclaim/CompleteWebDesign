<template class="container">
  <ScoreBoard :player="this.player" :computer="this.computer" />
  <div v-if="this.isErrorPresent" class="error">
    <span v-html="this.error"></span>
  </div>
  <template v-if="this.question && this.incorrectAnswers">
    <div v-if="!this.isErrorPresent">
      <section class="question-section">
        <div class="question">
          <h1 v-html="this.question"></h1>
        </div>
      </section>
      <section class="answers-section">
        <div class="answers">
          <div class="answers-header">Choose an answer</div>
          <template
            v-for="(answer, index) in this.answers"
            :key="answer + index"
          >
            <div class="answer-item">
              <input
                type="radio"
                :id="answer + index"
                name="answer"
                :value="answer"
                v-model="this.selectedAnswer"
              />
              <label :for="answer + index" v-html="answer"></label>
            </div>
          </template>
        </div>
      </section>
      <template v-if="this.isAnswerSubmitted">
        <section class="result-section">
          <div
            v-if="this.selectedAnswer !== this.correctAnswer"
            v-html="'&#10060; Sorry wrong answer'"
          ></div>
          <span v-else v-html="'&#10003; Your answer is correct!'"></span>
        </section>
      </template>
      <section class="controls-section">
        <div class="controls">
          <button
            v-if="!this.isAnswerSubmitted"
            class="submit-button"
            :disabled="!this.selectedAnswer"
            type="submit"
            @click="this.submitAnswer()"
          >
            Submit
          </button>
          <button
            v-if="isAnswerSubmitted"
            class="submit-button"
            type="submit"
            @click="this.getQuestionAndAnswers()"
          >
            Next Question
          </button>
        </div>
      </section>
    </div>
  </template>
</template>

<script>
import { isProxy, toRaw } from "vue";
import ScoreBoard from "@/components/ScoreBoard.vue";

export default {
  name: "App",
  data() {
    return {
      api: "https://opentdb.com/api.php?amount=1",
      dataResult: undefined,
      question: undefined,
      selectedAnswer: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      isAnswerSubmitted: undefined,
      isErrorPresent: false,
      error: undefined,
      player: 0,
      computer: 0,
    };
  },
  computed: {
    answers() {
      // const ans = JSON.parse(JSON.stringify(this.incorrectAnswers));
      let answers = [];
      answers.push(...this.incorrectAnswers);
      const index = Math.round(Math.random() * answers.length);
      answers.splice(index, 0, this.correctAnswer);
      return answers;
    },
  },
  methods: {
    getQuestion: async function () {
      await this.axios.get(this.api).then((response) => {
        if (!response.data || response.data.response_code !== 0) {
          this.isErrorPresent = true;
          this.error = `An error occurred. No question was gotten, please try again later`;
          return;
        }
        this.resetErrorData();
        this.question = response.data.results[0].question;
        this.dataResult = {
          correct_answer: response.data.results[0].correct_answer,
          incorrect_answers: [...response.data.results[0].incorrect_answers],
        };
        return this.dataResult;
      });
    },
    setAnswers() {
      if (isProxy(this.dataResult)) {
        this.dataResult = {
          ...toRaw(this.dataResult),
        };
      }
      this.correctAnswer = this.dataResult.correct_answer;
      this.incorrectAnswers = this.dataResult.incorrect_answers;
      this.dataResult = undefined;
    },
    resetErrorData() {
      this.isErrorPresent = false;
      this.error = undefined;
    },
    resetData() {
      this.dataResult = undefined;
      this.question = undefined;
      this.selectedAnswer = undefined;
      this.incorrectAnswers = undefined;
      this.correctAnswer = undefined;
      this.isAnswerSubmitted = undefined;
      this.resetErrorData();
    },

    submitAnswer() {
      if (!this.selectedAnswer) {
        alert("Select an option before submitting.");
        return;
      }

      this.isAnswerSubmitted = true;
      if (this.selectedAnswer === this.correctAnswer) this.player += 1;
      else this.computer += 1;
    },
    async getQuestionAndAnswers() {
      this.resetData();
      await this.getQuestion();
      this.setAnswers();
    },
  },
  async created() {
    await this.getQuestionAndAnswers();
  },
  components: {
    ScoreBoard,
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
  margin: 60px auto;
  max-width: 960px;

  .error {
    width: 100%;
    color: #ad828c;
    font-size: 26px;
    font-weight: bolder;
    letter-spacing: 0.5px;
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
    width: 70ch;
    letter-spacing: 0.5px;
    line-height: 2.2em;
  }

  .answers-section {
    background-color: #eef7fb;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin: 0 auto;
  }

  .answers-header {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  .answers {
    display: flex;
    flex-direction: column;
  }

  .answer-item {
    text-wrap: wrap;
  }

  .answer-item input[type="radio"] {
    margin: 10px 5px;
  }

  .answer-item label {
    margin: 10px 5px;
  }

  .result-section {
    background-color: #eef7fb;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    width: 100%;
    margin: 0 auto;
  }

  .controls-section {
    background-color: #93a6ad;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .submit-button {
    margin: 0;
    border: 0;
    border-radius: 6px;
    box-shadow: 10px 10px 16px 0px rgba(147, 166, 173, 0.75);
    background-color: #eef7fb;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  .submit-button:disabled {
    cursor: not-allowed;
  }
}
</style>

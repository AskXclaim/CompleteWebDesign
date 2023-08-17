<template>
  <section id="section-scoreBoard">
    <span
      >Player<span class="score">{{ this.player }}</span> X
      <span class="score">{{ this.computer }}</span
      >Computer</span
    >
    <hr class="line" />
  </section>
</template>

<script>
export default {
  name: "ScoreBoard",
  // props: ["player", "computer"], you can use string arrays too for props
  props: { player: Number, computer: Number },
};
</script>

<style scoped lang="scss">
#section-scoreBoard {
  background-color: #eef7fb;
  padding: 20px 0;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;

  .score {
    padding: 5px;
    margin: 5px;
    border: 2px solid #93a6ad;
  }

  .line {
    margin: 15px 0 0;
    border: 1px solid #93a6ad;
  }
}
</style>

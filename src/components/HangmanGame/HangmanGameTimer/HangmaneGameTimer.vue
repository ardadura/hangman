<template>
  <section aria-label="game timer">
    <div class="game-timer">
      <span aria-label="seconds"> {{ seconds }} </span>:
      <span aria-label="milliseconds">
        {{ milliseconds }}
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { gameTimer } from "@/use/game-timer";

export default {
  name: "HangmanGameTimer",
  setup() {
    return gameTimer();
  },
};
</script>

<style lang="scss" scoped>
.game-timer {
  font-size: 1.2rem;
  color: #054468;
  font-weight: 700;
}
</style>

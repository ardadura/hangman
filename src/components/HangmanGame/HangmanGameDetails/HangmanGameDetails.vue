<template>
  <section aria-label="game details">
    <div class="game-details">
      <span aria-label="game difficulty">
        Game Difficulty: {{ difficulty }}
      </span>
      <span aria-label="user name"> User Name: {{ userName }} </span>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "HangmanGameDetails",
  setup() {
    const userName = ref("...");
    const difficulty = ref("...");

    return { userName, difficulty };
  },
};
</script>

<style lang="scss" scoped>
.game-details {
  font-size: 1.2rem;
  color: #054468;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>

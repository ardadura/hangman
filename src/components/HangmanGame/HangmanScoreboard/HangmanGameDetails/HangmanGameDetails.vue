<template>
  <section aria-label="game details">
    <div class="game-details">
      <span aria-label="game difficulty">
        Game Difficulty: {{ selectedWord.difficulty.toUpperCase() }}
      </span>
      <span aria-label="user name"> User Name: {{ userName }} </span>
      <span aria-label="completed keywords"
        >Completed Words: {{ completedWords.toString() }}</span
      >
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { useHangmanStore } from "@/store/HangmanStore";

export default {
  name: "HangmanGameDetails",
  setup() {
    const store = useHangmanStore();
    const userName = ref("...");
    const selectedWord = computed(() => {
      return store.getSelectedWord;
    });

    const completedWords = computed(() => {
      return store.getCompletedWorks;
    });

    return { userName, selectedWord, completedWords };
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

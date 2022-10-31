<template>
  <div class="game-board__content--word">
    <HangmanGameCurrentWord />
  </div>
  <div class="game-board__content--keyboard"><HangmanGameKeyboard /></div>
</template>

<script lang="ts">
import HangmanGameKeyboard from "@/components/HangmanGame/HangmanGameWord/HangmanGameKeyboard/HangmanGameKeyboard.vue";
import HangmanGameCurrentWord from "@/components/HangmanGame/HangmanGameWord/HangmanGameCurrentWord/HangmanGameCurrentWord.vue";
export default {
  name: "HangmanGameWord",
  components: { HangmanGameCurrentWord, HangmanGameKeyboard },
};
</script>

<style lang="scss" scoped></style>

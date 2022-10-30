<template>
  <section aria-label="hangman game illustration">
    <HangmanStatus />
  </section>
</template>

<script lang="ts">
import HangmanStatus from "@/components/HangmanGame/HangmanGameIllustration/HangmanStatus/HangmanStatus.vue";
export default {
  name: "HangmanGameIllustration",
  components: { HangmanStatus },
};
</script>

<style lang="scss" scoped></style>

<template>
  <section aria-label="keyboard">
    <div class="keyboard">
      <KeyboardButton />
    </div>
  </section>
</template>

<script lang="ts">
import KeyboardButton from "@/components/HangmanGame/HangmanGameKeyboard/KeyboardButton/KeyboardButton.vue";
export default {
  name: "HangmanGameKeyboard",
  components: { KeyboardButton },
};
</script>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

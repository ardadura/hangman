<template>
  <div class="game-board">
    <div class="game-board__header">
      <div class="game-board__indicator"><HangmanGameIndicator /></div>
      <div class="game-board__timer"><HangmanGameTimer /></div>
    </div>
    <div class="game-board__content">
      <div class="game-board__content--illustration">
        <HangmanGameIllustration />
      </div>
      <div class="game-board__content--keyboard"><HangmanGameKeyboard /></div>
    </div>
  </div>
</template>

<script lang="ts">
import HangmanGameTimer from "@/components/HangmanGame/HangmanGameTimer/HangmaneGameTimer.vue";
import HangmanGameIndicator from "@/components/HangmanGame/HangmanGameIndicator/HangmanGameIndicator.vue";
import HangmanGameIllustration from "@/components/HangmanGame/HangmanGameIllustration/HangmanGameIllustration.vue";
import HangmanGameKeyboard from "@/components/HangmanGame/HangmanGameKeyboard/HangmanGameKeyboard.vue";
export default {
  name: "HangmanGameBoard",
  components: {
    HangmanGameKeyboard,
    HangmanGameIllustration,
    HangmanGameIndicator,
    HangmanGameTimer,
  },
};
</script>

<style lang="scss" scoped>
.game-board {
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  padding-block: 1rem;
  padding-inline: 0.8rem;
  &__header,
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex: 0 0 100%;
    &--illustration {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 25%;
      @media screen and (max-width: 992px) {
        width: 100%;
      }
    }
    &--keyboard {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 75%;
      @media screen and (max-width: 992px) {
        margin-block-start: 1rem;
        width: 100%;
      }
    }
  }
}
</style>

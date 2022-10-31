<template>
  <div class="game-board">
    <div class="game-board__indicator" v-if="!getCompletedWorks">
      <HangmanGameIndicator />
    </div>
    <div v-if="isGameStartForOnce && !getCompletedWorks">
      <div class="game-board__header">
        <HangmanScoreboard />
      </div>
      <div class="game-board__content">
        <div class="game-board__content--illustration">
          <HangmanGameIllustration />
        </div>
        <div class="game-board__content--word"><HangmanGameWord /></div>
      </div>
    </div>
    <div v-if="getCompletedWorks">
      <h3>
        CONGRATULATIONS. You have finished the game. You can refresh the page
        now :)
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import HangmanGameIndicator from "@/components/HangmanGame/HangmanGameIndicator/HangmanGameIndicator.vue";
import HangmanGameIllustration from "@/components/HangmanGame/HangmanGameIllustration/HangmanGameIllustration.vue";
import HangmanScoreboard from "@/components/HangmanGame/HangmanScoreboard/HangmanScoreboard.vue";
import HangmanGameWord from "@/components/HangmanGame/HangmanGameWord/HangmanGameWord.vue";
import { useHangmanStore } from "@/store/HangmanStore";
import { computed } from "vue";
export default {
  name: "HangmanGameBoard",
  components: {
    HangmanGameWord,
    HangmanScoreboard,
    HangmanGameIllustration,
    HangmanGameIndicator,
  },
  setup() {
    const store = useHangmanStore();

    const isGameStartForOnce = computed(() => {
      return store.getGameStartForOnce;
    });
    const isGameRunning = computed(() => {
      return store.getGameStatus;
    });
    const getCompletedWorks = computed(() => {
      return store.getCompletedWorks.length >= 6;
    });

    return { isGameRunning, isGameStartForOnce, getCompletedWorks };
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
    &--word {
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

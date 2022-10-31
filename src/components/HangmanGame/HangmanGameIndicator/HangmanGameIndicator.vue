<template>
  <section aria-label="Game Indicatior">
    <div class="game-indicator">
      <ButtonComponent
        :disabled="isGameRunning"
        :text="buttonText"
        @action="startGame"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { computed } from "vue";
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";
import { useHangmanStore } from "@/store/HangmanStore";

export default {
  name: "HangmanGameIndicator",
  components: { ButtonComponent },
  setup() {
    const store = useHangmanStore();

    const isGameRunning = computed(() => {
      return store.getGameStatus;
    });
    const buttonText = computed(() => {
      return isGameRunning.value ? "game still running" : "start";
    });

    function startGame() {
      store.setGameStart();
    }

    return { isGameRunning, buttonText, startGame };
  },
};
</script>

<style lang="scss" scoped></style>

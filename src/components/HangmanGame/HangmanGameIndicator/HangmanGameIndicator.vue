<template>
  <section aria-label="Game Indicatior">
    <div class="game-indicator">
      <ButtonComponent
        :disabled="isGameRunning"
        :text="buttonText"
        @CTA="startGame"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";

export default {
  name: "HangmanGameIndicator",
  components: { ButtonComponent },
  setup() {
    const isGameRunning = ref(false);
    const buttonText = computed(() => {
      return isGameRunning.value ? "game still running" : "start";
    });

    function startGame() {
      isGameRunning.value = true;
    }
    return { isGameRunning, buttonText, startGame };
  },
};
</script>

<style lang="scss" scoped></style>

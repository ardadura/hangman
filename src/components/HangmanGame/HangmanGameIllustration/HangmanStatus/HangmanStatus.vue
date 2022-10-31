<template>
  <section aria-label="hangman current status">
    <div class="hangman-status">
      <img :src="getHangmanImage" :alt="getCurrentStepDetails" />
    </div>
  </section>
</template>

<script lang="ts">
import { computed } from "vue";
import { useHangmanStore } from "@/store/HangmanStore";

export default {
  name: "HangmanStatus",
  setup() {
    const store = useHangmanStore();
    const currentStep = computed(() => {
      return store.getWrongAttemptsCount;
    });

    const getCurrentStepDetails = computed(() => {
      return `step ${currentStep.value} out of 5`;
    });

    const getHangmanImage = computed(() => {
      return require(`@/assets/hangmanImages/step${currentStep.value}.jpg`);
    });

    return { getHangmanImage, currentStep, getCurrentStepDetails };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <section aria-label="current word">
    <div class="current-word">
      <div
        class="current-word__char"
        v-for="(item, index) in selectedWord"
        :key="`${index + item}`"
        :class="{ hidden: item === ' ' }"
      >
        <span
          class="current-word__char--value"
          v-if="setItemVisibility(item)"
          >{{ item }}</span
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useHangmanStore } from "@/store/HangmanStore";
import { computed } from "vue";

export default {
  name: "HangmanGameCurrentWord",
  setup() {
    const store = useHangmanStore();
    const selectedWord = computed(() => {
      return store.getSelectedWord["text"].split("");
    });
    const getSelectedChars = computed(() => {
      return store.getSelectedChars;
    });

    function setItemVisibility(char) {
      return getSelectedChars.value.find((item) => item === char);
    }

    return { selectedWord, setItemVisibility };
  },
};
</script>

<style lang="scss" scoped>
.current-word {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-block-end: 1rem;
  &__char {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    &.hidden {
      opacity: 0;
    }
  }
}
</style>

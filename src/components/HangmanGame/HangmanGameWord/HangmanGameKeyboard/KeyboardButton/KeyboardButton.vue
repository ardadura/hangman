<template>
  <ButtonComponent
    v-for="(item, index) in alphabet"
    :key="`keyboard ${(item, index)}`"
    :text="item.text"
    :disabled="!isGameRunning || item.disabled"
    @click="action(item, index)"
  />
</template>

<script lang="ts">
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";
import { INITIAL_ALPHABET } from "@/constants/constants";
import { IKeyboard } from "@/components/HangmanGame/HangmanGameWord/HangmanGameKeyboard/KeyboardButton/KeyboardInterface";
import { computed, ref, watch } from "vue";
import { useHangmanStore } from "@/store/HangmanStore";
import { checkCharInWord, removedSpaceInArray } from "@/utils/helperFunctions";

export default {
  name: "KeyboardButton",
  components: { ButtonComponent },
  setup() {
    const store = useHangmanStore();
    const isGameRunning = computed(() => {
      return store.getGameStatus;
    });
    const selectedWord = computed(() => {
      return store.getSelectedWord["text"].split("");
    });
    const getSelectedChars = computed(() => {
      return store.getSelectedChars;
    });
    let alphabet = ref(INITIAL_ALPHABET);

    function action(char: IKeyboard) {
      store.setChar(char.value);
      checkSelectedCharInWord(char.value);
      checkWordHasBeenFound();
      char.disabled = true;
    }

    function checkSelectedCharInWord(char) {
      const currentWord = store.getSelectedWord["text"];
      if (!checkCharInWord(currentWord, char)) {
        store.setWrongAttempts();
      }
    }

    function checkWordHasBeenFound() {
      const trimmedSelectedWord = removedSpaceInArray(selectedWord.value);
      const isFound = trimmedSelectedWord.every((r) =>
        getSelectedChars.value.includes(r)
      );
      if (isFound) {
        store.setCompletedWords(store.getSelectedWord["text"]);
        store.setGameStatus(false);
      }
    }

    watch(isGameRunning, (newValue) => {
      if (newValue) {
        alphabet.value = alphabet.value.map((item) => {
          return { ...item, disabled: false };
        });
      }
    });

    return { alphabet, action, isGameRunning };
  },
};
</script>

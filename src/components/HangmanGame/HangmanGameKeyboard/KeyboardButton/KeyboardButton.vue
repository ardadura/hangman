<template>
  <ButtonComponent
    v-for="(item, index) in alphabet"
    :key="`keyboard ${(item, index)}`"
    :text="item.text"
    :disabled="item.disabled"
    @click="action(item, index)"
  />
</template>

<script lang="ts">
import ButtonComponent from "@/components/Common/Button/ButtonComponent";
import { INITIAL_ALPHABET } from "@/constants/constants";
import { IKeyboard } from "@/components/HangmanGame/HangmanGameKeyboard/KeyboardButton/KeyboardInterface";
import { ref } from "vue";

export default {
  name: "KeyboardButton",
  components: { ButtonComponent },
  setup() {
    let alphabet = ref(INITIAL_ALPHABET);

    function action(char: IKeyboard) {
      // @Todo set value in the future
      char.disabled = true;
    }

    return { alphabet, action };
  },
};
</script>

<template>
  <div class="game-board__timer"><HangmanGameTimer /></div>
  <div class="game-board__details"><HangmanGameDetails /></div>
</template>

<script lang="ts">
import HangmanGameTimer from "@/components/HangmanGame/HangmanScoreboard/HangmanGameTimer/HangmanGameTimer.vue";
import HangmanGameDetails from "@/components/HangmanGame/HangmanScoreboard/HangmanGameDetails/HangmanGameDetails.vue";
export default {
  name: "HangmanScoreboard",
  components: { HangmanGameDetails, HangmanGameTimer },
};
</script>

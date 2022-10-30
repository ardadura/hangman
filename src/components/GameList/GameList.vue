<template>
  <section aria-label="Game List">
    <div class="game-list">
      <GameItem :games="games" />
    </div>
  </section>
</template>

<script lang="ts">
import GameItem from "@/components/GameList/GameItem.vue";
import { ref } from "vue";
import { GAME_LIST } from "@/constants/constants";

export default {
  name: "GameList",
  components: {
    GameItem,
  },
  setup() {
    const games = ref(GAME_LIST);
    return { games };
  },
};
</script>

<style lang="scss" scoped>
.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
}
</style>

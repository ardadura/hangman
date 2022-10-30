<template>
  <router-link
    v-for="(item, index) in games"
    :key="`${index + item.name}`"
    :aria-disabled="!!item.readyToPlay"
    :to="{ name: item.to }"
    class="game"
    :aria-label="`to ${item.name}`"
    :class="{ disabled: !item.readyToPlay }"
  >
    <div class="game-card">
      <div class="game-card__header">
        <img :src="item.image" :alt="item.name" />
      </div>
      <div class="game-card__footer">
        <p :aria-label="item.name">{{ item.name }}</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IGame } from "./GameInterface";
export default {
  name: "GameItem",
  props: {
    games: {
      type: Array as PropType<Array<IGame>>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  border: 1px solid lightgray;
  padding-inline: 1rem;
  padding-block: 1.3rem;
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>

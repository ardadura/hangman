<template>
  <div class="dashboard">
    <GameList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameList from "@/components/GameList/GameList.vue";

export default defineComponent({
  name: "DashboardView",
  components: { GameList },
});
</script>

<style lang="scss" scope>
.dashboard {
  padding-block: 0.2rem;
  padding-inline: 1rem;
}
</style>

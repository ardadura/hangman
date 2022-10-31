<template>
  <main role="main" class="main" aria-labelledby="main-title">
    <NavigationBar />
    <div class="main__content">
      <AppHeader />
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import NavigationBar from "@/components/Navigation/NavigationBar.vue";
import AppHeader from "@/components/Header/AppHeader.vue";
import { onBeforeMount } from "vue";
import { WORDS } from "@/constants/constants";
import { useHangmanStore } from "@/store/HangmanStore";

export default {
  name: "MainView",
  components: {
    NavigationBar,
    AppHeader,
  },
  setup() {
    onBeforeMount(() => {
      const store = useHangmanStore();
      store.setWords(WORDS);
    });
  },
};
</script>

<style lang="scss">
.main {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  &__content {
    width: 100%;
  }
}
</style>

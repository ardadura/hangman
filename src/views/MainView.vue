<template>
  <main role="main" class="main" aria-labelledby="main-title">
    <NavigationBar />
    <div class="main__content">
      <AppHeader />
      <router-view />
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/Navigation/NavigationBar";
import AppHeader from "@/components/Header/AppHeader";
export default {
  name: "MainView",
  components: {
    NavigationBar,
    AppHeader,
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

<template>
  <section aria-labelledby="section-title" class="app-header">
    <div class="app-header__content">
      <img
        src="../../assets/logo.png"
        height="40"
        width="40"
        alt="Online Gaming Platform logo"
      />
      <h1>Online Gaming Platform</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  background-color: #d4d2e6;
  border-bottom: 1px solid black;
  margin-block-end: 2rem;
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-block: 1rem;
    padding-inline: 0.8rem;
    h1 {
      font-size: 1rem;
    }
  }
}
</style>

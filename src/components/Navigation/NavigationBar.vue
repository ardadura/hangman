<template>
  <nav role="navigation">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/hangman">Hangman</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style lang="scss" scoped>
nav {
  min-height: 100vh;
  transform: translateX(0%);
  width: 200px;
  display: flex;
  flex-direction: column;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  pointer-events: auto;
  background: rgb(5, 68, 104);
  transition: all 0.5s ease;
  a {
    padding: 13px 30px;
    border-bottom: 1px solid #10558d;
    color: rgb(241, 237, 237);
    font-size: 16px;
    position: relative;
    text-decoration: none;
    &:hover {
      color: #7bcbf0;
    }
    &.router-link-exact-active {
      color: #0c7db1;
    }
  }
}
</style>

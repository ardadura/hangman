<template>
  <div class="login">
    <div class="flash-message" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <LoginApp v-if="layout === 'login'" @changeLayout="changeLayout" />
    <RegisterApp v-else @changeLayout="changeLayout" />
  </div>
</template>

<script>
import RegisterApp from "@/components/Register/RegisterApp";
import LoginApp from "@/components/Login/LoginApp";
import { inject, ref } from "vue";
export default {
  name: "LoginView",
  components: { LoginApp, RegisterApp },
  setup() {
    const layout = ref("login");
    const GStore = inject("GStore");

    function changeLayout(value) {
      layout.value = value;
    }

    return { layout, changeLayout, GStore };
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: block;
  height: 100vh;
  width: 100%;
  .flash-message {
    @keyframes yellowfade {
      from {
        background: green;
      }
      to {
        background: transparent;
      }
    }
    animation-name: yellowfade;
    animation-duration: 3s;
    width: 350px;
    height: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
    position: fixed;
    top: 50px;
    left: 50px;
  }
}
</style>

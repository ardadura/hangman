<template>
  <div class="login">
    <LoginApp v-if="layout === 'login'" @changeLayout="changeLayout" />
    <RegisterApp v-else @changeLayout="changeLayout" />
  </div>
</template>

<script>
import RegisterApp from "@/components/Register/RegisterApp";
import LoginApp from "@/components/Login/LoginApp";
import { ref } from "vue";
export default {
  name: "LoginView",
  components: { LoginApp, RegisterApp },
  setup() {
    const layout = ref("login");

    function changeLayout(value) {
      layout.value = value;
    }
    return { layout, changeLayout };
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

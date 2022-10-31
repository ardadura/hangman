<template>
  <section aria-label="login form, need email and password">
    <div class="login-wrapper">
      <form class="login-wrapper__form" @submit.prevent="">
        <InputComponent
          v-model:value="email"
          type="email"
          :required="true"
          :disabled="false"
          label="E-Mail"
          placeholder="Please enter your e-mail"
        />
        <InputComponent
          v-model:value="password"
          type="password"
          :required="true"
          :disabled="false"
          label="Password"
          placeholder="Please enter your e-mail"
        />
        <div class="buttons">
          <ButtonComponent :text="'Sign In'" @click="login" />
          <ButtonComponent
            :text="'Register'"
            @click="changeLayout('register')"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import InputComponent from "@/components/Common/Input/InputComponent.vue";
import { ref } from "vue";
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";
import NProgress from "nprogress";
import router from "@/router";
import { getUser } from "@/api/LoginAPI";

export default {
  name: "LoginApp",
  components: { ButtonComponent, InputComponent },
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");

    function changeLayout(value) {
      emit("changeLayout", value);
    }

    function login() {
      NProgress.start();
      getUser()
        .then((response) => {
          const { name, role } = response.data[0];
          localStorage.setItem("role", role);
          localStorage.setItem("name", name);
          localStorage.setItem("status", "loggedIn");
          router.push({ name: "dashboard" });
        })
        .catch((error) => {
          localStorage.removeItem("role");
          localStorage.removeItem("name");
          if (error.response && error.response.status == 404) {
            router.push({
              name: "404Resource",
              params: { resource: "event" },
            });
          } else {
            router.push({ name: "NetworkError" });
          }
        })
        .finally(() => {
          NProgress.done();
        });
    }

    return { email, password, changeLayout, login };
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    .buttons {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-block-start: 1rem;
    }
  }
}
</style>

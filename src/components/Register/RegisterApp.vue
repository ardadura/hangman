<template>
  <section aria-label="login form, need email and password">
    <div class="login">
      <form class="login-form" @submit.prevent="">
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
          <ButtonComponent
            :text="'Back To Login Page'"
            @click="changeLayout('login')"
          />
          <ButtonComponent :text="'Confirm Registration'" @click="createUser" />
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import InputComponent from "@/components/Common/Input/InputComponent.vue";
import { ref } from "vue";
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";
import { registerUser } from "@/api/RegisterAPI";
import { inject } from "vue";
import router from "@/router";
import NProgress from "nprogress";

export default {
  name: "RegisterAPP",
  components: { ButtonComponent, InputComponent },

  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");
    const GStore = inject("GStore");

    function changeLayout(value) {
      emit("changeLayout", value);
    }

    function createUser() {
      NProgress.start();
      registerUser({ email: email.value, password: password.value })
        .then(() => {
          setFlashMessage(
            "You are successfully registered. Redirecting to Login page in 5 seconds",
            "login",
            5000
          );
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            router.push({
              name: "404Resource",
              params: { resource: "event" },
            });
          } else {
            router.push({ name: "NetworkError" });
          }
          setFlashMessage(error.message, "login", 5000);
        })
        .finally(() => {
          NProgress.done();
        });
    }

    function setFlashMessage(message, page, time) {
      GStore["flashMessage"] = message;
      setTimeout(() => {
        GStore["flashMessage"] = "";
        changeLayout(page);
      }, time);
    }

    return { email, password, changeLayout, createUser };
  },
};
</script>

<style lang="scss" scoped>
.login {
  &-form {
    display: flex;
    flex-direction: column;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .buttons {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-block-start: 1rem;
    }
  }
}
</style>

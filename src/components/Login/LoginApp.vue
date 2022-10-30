<template>
  <section aria-label="login form, need email and password">
    <div class="login">
      <form class="login-form" @submit.prevent="">
        <InputComponent
          v-model:String="email"
          type="email"
          :required="true"
          :disabled="false"
          label="E-Mail"
          placeholder="Please enter your e-mail"
        />
        <InputComponent
          v-model:String="password"
          type="password"
          :required="true"
          :disabled="false"
          label="Password"
          placeholder="Please enter your e-mail"
        />
        <div class="buttons">
          <ButtonComponent :text="'Sign In'" />
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
export default {
  name: "LoginApp",
  components: { ButtonComponent, InputComponent },
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");

    function changeLayout(value) {
      emit("changeLayout", value);
    }

    return { email, password, changeLayout };
  },
};
</script>

<style lang="scss" scoped>
.login {
  &-form {
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

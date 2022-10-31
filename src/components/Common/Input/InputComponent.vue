<template>
  <div class="input">
    <label :for="type">{{ label }}</label>
    <input
      :type="props.type"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :required="props.required"
      @input="emit('update:value', $event.target.value)"
      :data-testid="props.dataTestId"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  disabled: { type: Boolean, default: false },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "Please enter value" },
  required: { type: Boolean, default: false },
  value: { required: true },
  dataTestId: { required: false },
});
const emit = defineEmits(["update:value"]);
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  input {
    width: 100%;
    height: 36px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: normal;
    border: 1px solid rgb(137, 151, 155);
    transition: border-color 150ms ease-in-out 0s;
    outline: none;
    color: rgb(33, 49, 60);
    background-color: rgb(255, 255, 255);
    :hover {
      box-shadow: rgb(231 238 236) 0px 0px 0px 3px;
    }
    margin-block-end: 0.5rem;
  }
  label {
    font-size: 1rem;
    color: #0c7db1;
  }
}
</style>

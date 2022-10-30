<template>
  <button
    :disabled="props.disabled"
    :aria-label="props.text"
    @click="action"
    class="button"
  >
    {{ props.text }}
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({ disabled: Boolean, text: String });
const emit = defineEmits(["CTA"]);

const action = () => {
  return emit("CTA");
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding-inline: 1.2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.button-1:hover,
.button-1:focus {
  background-color: #f082ac;
}
</style>

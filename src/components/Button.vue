<template>
  <button :class="'btn ' + buttonStyle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonStyle: String
  }
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: none;
  color: inherit;
  background: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;

  &.-primary {
    background: #cf4d6f;
    color: #fff;

    &:hover {
      background: lighten(#cf4d6f, 10%);
    }
  }

  &.-empty {
    padding: 0;
  }

  &.-cta {
    text-transform: uppercase;
    font-weight: 700;
    padding: 16px 32px;
  }

  &.-text {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: lighten(#cf4d6f, 25%);
    }
  }
}
</style>

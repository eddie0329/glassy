<template>
  <button
    ref="gButton"
    g-button
    @click="onClick"
    :class="{ [color]: color, round }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GButton",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/asset";
[g-button] {
  .rel();
  .ib();
  font-family: "Poppins", sans-serif;
  .h(38px);
  .color(#ffffff);
  .p(5px, 20px);
  .pointer();
  transition: all 0.2s ease-in-out;
  &:hover:enabled {
    filter: brightness(85%);
    -webkit-filter: brightness(85%);
    -moz-filter: brightness(85%);
    -o-filter: brightness(85%);
    -ms-filter: brightness(85%);
  }
  &:disabled {
    .o(0.5);
    cursor: default;
  }
  &:focus {
    outline: none;
  }
}

[g-button-blur-border] {
  .abs();
  .l(0);
  .t(0);
  .ib();
  .w(100%);
  .h(33px);
}

.round {
  border-radius: 8px;
}

.primary {
  .bgc(@primary);
  .-a(@primary, 3px);
  .color-shadow(@primary);
}
.secondary {
  .bgc(@secondary);
  .-a(@secondary, 3px);
  .color-shadow(@secondary);
}
.success {
  .bgc(@success);
  .-a(@success, 3px);
  .color-shadow(@success);
}
.danger {
  .bgc(@danger);
  .-a(@danger, 3px);
  .color-shadow(@danger);
}
.warning {
  .bgc(@warning);
  .-a(@warning, 3px);
  .color-shadow(@warning);
}
.info {
  .bgc(@info);
  .-a(@info, 3px);
  .color-shadow(@info);
}
.white {
  .color(rgba(0, 0, 0, 0.25));
  .bgc(@white);
  .-a(@white, 3px);
  .color-shadow(@white);
}
.dark {
  .bgc(@dark);
  .-a(@dark, 3px);
  .color-shadow(@dark);
}
</style>

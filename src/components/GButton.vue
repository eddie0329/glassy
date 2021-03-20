<template>
  <button
    ref="gButton"
    g-button
    @click="onClick"
    :class="{ [color]: color, round }"
  >
    <slot></slot>
    <div g-button-blur-border :class="{ round }"></div>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  [g-button-blur-border] {
    .btn-shadow(@primary);
  }
}
.secondary {
  .bgc(@secondary);
  .-a(@secondary, 3px);
  [g-button-blur-border] {
    .btn-shadow(@secondary);
  }
}
.success {
  .bgc(@success);
  .-a(@success, 3px);
  [g-button-blur-border] {
    .btn-shadow(@success);
  }
}
.danger {
  .bgc(@danger);
  .-a(@danger, 3px);
  [g-button-blur-border] {
    .btn-shadow(@danger);
  }
}
.warning {
  .bgc(@warning);
  .-a(@warning, 3px);
  [g-button-blur-border] {
    .btn-shadow(@warning);
  }
}
.info {
  .bgc(@info);
  .-a(@info, 3px);
  [g-button-blur-border] {
    .btn-shadow(@info);
  }
}
.white {
  .color(rgba(0, 0, 0, 0.25));
  .bgc(@white);
  .-a(@white, 3px);
  [g-button-blur-border] {
    .btn-shadow(@white);
  }
}
.dark {
  .bgc(@dark);
  .-a(@dark, 3px);
  [g-button-blur-border] {
    .btn-shadow(@dark);
  }
}
</style>

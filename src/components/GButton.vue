<template>
  <button
    ref="gButton"
    g-button
    @click="$emit('click')"
    :class="{ [color]: color, round }"
  >
    <slot></slot>
  </button>
</template>

<script>
import { PRIMARY } from "@/constants";
import { colorValidator } from "@/props-validator";

export default {
  name: "GButton",
  props: {
    color: {
      type: String,
      default: PRIMARY,
      validator: colorValidator,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/asset";
[g-button] {
  font-family: "Poppins", sans-serif;
  .h(38px);
  .color(#ffffff);
  .pointer();
  transition: all 0.2s ease-in-out;
  &:hover:enabled {
    .filter-b(85%);
  }
  &:disabled {
    .o(0.5);
    cursor: default;
  }
  &:focus {
    outline: none;
  }
}

.round {
  .br(8px);
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

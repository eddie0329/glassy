<template>
  <div g-alert @click="$emit('click')" :class=[color]>
    <slot></slot>
  </div>
</template>

<script>
import { PRIMARY } from "@/constants";
import { colorValidator } from "@/props-validator";

export default {
  name: "GAlert",
  props: {
    color: {
      type: String,
      default: PRIMARY,
      validator: colorValidator,
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/asset";
[g-alert] {
  .flex();
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  .h(60px);
  .color(#ffffff);
  .pointer();
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

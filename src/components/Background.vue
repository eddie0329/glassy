<template>
  <div background-container>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>

<style lang="less" scoped>
@import "~@/less/asset";
[background-container] {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>

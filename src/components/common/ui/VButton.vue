<template>
  <button class="VButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style scoped>
  .VButton {
    padding: 15px;
    border-radius: 100px;
    background: #eb5629;
    text-transform: uppercase;
    font-weight: 600;
    transition: background .3s;
    color: #fff;
  }

  .VButton:hover {
    background: #ed6941;
  }

  .VButton:active {
    background: #e77e5f;
  }
</style>

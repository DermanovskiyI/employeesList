<template>
  <div class="VInput">
    <div
      v-if="label"
      class="label" v-html="label"
    />
    <input
      class="VInputNative"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    label: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .VInput {
    display: flex;
    flex-direction: column;
  }

  .label {
    align-self: flex-start;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }

  .VInputNative {
    width: 100%;
    padding: 16px 0;
    border: none;
    border-radius: 8px;
    text-indent: 10px;
    outline: none;
  }
</style>

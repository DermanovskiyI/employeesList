<template>
  <div class="VInput">
    <div
      v-if="label"
      class="label"
      v-html="label"
    />
    <input
      class="VInputNative"
      :placeholder="placeholder"
      v-model="value"
      @input="$emit('onInput', value)"
      @keydown="onKeyDown($event)"
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
    },

    onlyNumbers: {
      type: Boolean
    }
  },

  data () {
    return {
      value: ''
    }
  },

  methods: {
    onKeyDown (e) {
      if (this.onlyNumbers) {
        const parsedVal = parseInt(e.key, 0)
        if (!(parsedVal >= 0) && !(parsedVal <= 9)) {
          e.preventDefault()
        }
      }
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
    font-size: 16px;
    color: black;
  }
</style>

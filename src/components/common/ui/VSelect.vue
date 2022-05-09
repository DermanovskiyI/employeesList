<template>
  <div class="VSelect">
    <div
      v-if="label"
      class="label"
      v-html="label"
    />
    <div class="selectWrap">
      <div class="selectInput"
        @click="isOpen = !isOpen"
      >
        {{ selectedOption }}
      </div>
      <ul
        v-if="isOpen"
        class="optionsList"
      >
        <li
          v-for="(option, ndx) in options"
          :key="ndx"
          @click="isOpen = false"
          class="optionItem"
        >
          {{ option.i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',

  props: {
    label: {
      type: String,
      default: ''
    },

    selectedOption: {
      type: String,
      default: ''
    },

    options: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
  .VSelect {
    display: flex;
    flex-direction: column;
  }

  .selectWrap {
    position: relative;
  }

  .label {
    align-self: flex-start;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }

  .selectInput {
    position: relative;
    width: 100%;
    height: 47px;
    border: none;
    border-radius: 8px;
    background: #fff;
    text-indent: 10px;
    outline: none;
    cursor: pointer;
  }

  .selectInput:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid black;
    transform: translateY(-50%);
    transition: transform .3s;
  }

  .optionsList {
    position: absolute;
    top: 106%;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .04), 0 2px 6px rgba(0, 0, 0, .04), 0 0 0 rgba(0, 0, 0, .04);
  }

  .optionItem {
    padding: 16px;
    text-align: start;
    cursor: pointer;
    transition: background .3s;
  }

  .optionItem:nth-child(2) {
    background: #d5d0d0;
  }

  .optionItem:hover {
    background: grey;
  }

</style>

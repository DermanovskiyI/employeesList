<template>
  <div class="TheModal">
    <div
      class="overlay"
      @click.self="close"
    >
      <component
        :is='component'
        :data="data"
        @setEmpoloyee="setEmpoloyee"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
import { lockBody, unlockBody } from '../../assets/js/bodyScroll'
export default {
  name: 'TheModal',

  components: {
    AddEmployeeModal: () => import('./modals/AddEmployeeModal.vue')
  },

  props: {
    component: {
      type: String,
      default: ''
    },

    data: {
      type: Object,
      default: () => ({})
    }
  },

  mounted () {
    lockBody()
  },

  beforeDestroy () {
    unlockBody()
  },

  methods: {
    close () {
      unlockBody()
      this.$emit('closeModal')
    },

    setEmpoloyee (val) {
      this.$emit('setEmpoloyee', {...val})
      this.close()
    }
  }
}
</script>

<style scoped>
  .TheModal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
  }
</style>

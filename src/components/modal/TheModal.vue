<template>
  <div
    v-if="component"
    class="TheModal">
    <div
      class="overlay"
      @click.self="close"
    >
      <component
        :is='component'
        :data="data"
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

  data () {
    return {
      component: null,
      data: null
    }
  },

  beforeMount () {
    this.$modal.event.$on('open', this.open)
  },

  beforeDestroy () {
    this.$modal.event.$off('close', this.close)
  },

  methods: {
    open ({component, data}) {
      lockBody()
      this.component = component
      this.data = data
    },

    close () {
      unlockBody()
      this.component = null
      this.data = null
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

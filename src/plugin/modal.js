export const ModalPluguin = {
  install (Vue, options = {}) {
    Vue.prototype.$modal = {
      event: new Vue(),

      open (component, attrs, onclose) {
        this.event.$emit('open', component, attrs, onclose)
      },

      close () {
        this.event.$emit('close')
      }
    }
  }
}
export default ModalPluguin

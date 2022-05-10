<template>
  <div class="AddEmployeeModal">
    <div class="container">
      <div class="header">
        <div class="title">Добавление пользователя</div>
        <div
          class="modalClose"
          @click="$emit('close')"
        >
          X
        </div>
      </div>
      <div class="form">
        <div class="formRow">
          <VInput
            label="имя"
            placeholder="имя"
            @onInput="val => onInput('name', val)"
          />
        </div>
        <div class="formRow">
          <VInput
            label="телефон"
            placeholder="номер телефона"
            onlyNumbers
            @onInput="val => onInput('phone', parseInt(val))"
          />
        </div>
        <div class="formRow">
          <VSelect
            :options="data.allEmployees"
            label="Начальник"
            @onSelectChange="onSelectChange"
          />
        </div>
        <VButton
          class="btn"
          @click.native="setEmpoloyee"
        >
          СОХРАНИТЬ
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '../../common/ui/VInput.vue'
import VSelect from '../../common/ui/VSelect.vue'
import VButton from '../../common/ui/VButton.vue'
export default {
  name: 'AddEmployeeModal',

  components: {
    VInput,
    VSelect,
    VButton
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      empoloyee: {
        id: 0,
        name: '',
        phone: ''
      }
    }
  },

  methods: {
    onInput (name, val) {
      this.empoloyee[name] = val
    },

    onSelectChange (val) {
      this.empoloyee.parent = val
    },

    setEmpoloyee () {
      if (this.empoloyee.name.length || this.empoloyee.phone.length) {
        this.empoloyee.id = this.data.allEmployees.length + 1
        this.$emit('setEmpoloyee', {...this.empoloyee})
      }
      this.empoloyee.name = ''
      this.empoloyee.phone = ''
    }
  }
}
</script>

<style scoped>
  .AddEmployeeModal {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 550px;
    background: #6495ed;
    border-radius: 20px;
    transform: translate(-50%, -50%);
  }

  .container {
    padding: 32px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .modalClose {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  .formRow {
    margin-bottom: 12px;
  }

  .btn {
    width: 100%;
  }
</style>

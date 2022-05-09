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
      <form class="form">
        <div class="formRow">
          <VInput
            label="имя"
            placeholder="имя"
          />
        </div>
        <div class="formRow">
          <VInput
            label="телефон"
            placeholder="номер телефона"
          />
        </div>
        <div class="formRow">
          <VSelect label="Начальник" />
        </div>
        <VButton class="btn">
          СОХРАНИТЬ
        </VButton>
      </form>
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
  }
}
</script>

<style scoped>
  .AddEmployeeModal {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 550px;
    transform: translate(-50%, -50%);
    background: beige;
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

<template>
  <div class="Employees">
    <VButton
      class="addBtn"
      @click.native="addEmployee"
    >
      добавить
    </VButton>
    <div class="EmployeesTable">
      <div class="EmployeesHeading">
        <div class="EmployeesName">Имя</div>
        <div class="EmployeesPhone">Телефон</div>
      </div>
      <ul class="EmployeesList">
        <EmployeesListItem
          v-for="n in 5"
          :key="n"
          class="listItem"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VButton from './common/ui/VButton.vue'
import EmployeesListItem from './EmployeesListItem.vue'
export default {
  name: 'Employees',

  components: {
    VButton,
    EmployeesListItem
  },

  data () {
    return {
      //
    }
  },

  methods: {
    addEmployee () {
      this.$modal.open({
        component: 'AddEmployeeModal'
      })
    }
  }
}
</script>

<style scoped>
  .Employees {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }

  .addBtn {
    align-self: flex-start;
    margin-bottom: 16px;
  }

  .EmployeesTable {
    display: flex;
    flex-direction: column;
  }

  .EmployeesHeading {
    display: flex;
  }

  .EmployeesName,
  .EmployeesPhone,
  .listItem {
    flex: 1;
    min-width: 150px;
    padding: 10px;
    border: 1px solid black;
  }
</style>

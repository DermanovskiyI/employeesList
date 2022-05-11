<template>
  <div class="Employees">
    <VButton
      class="addBtn"
      @click.native="openModal"
    >
      добавить
    </VButton>
    <div class="EmployeesTable">
      <div class="EmployeesHeading">
        <div
          class="EmployeesName"
          @click="sorting('name')"
        >
          Имя
        </div>
        <div
          class="EmployeesPhone"
          @click="sorting('phone')"
        >
          Телефон
        </div>
      </div>
      <ul class="EmployeesList">
        <EmployeesListItem
          v-for="(item, ndx) in employeesList"
          :key="ndx"
          :item="item"
          class="listItem"
        />
      </ul>
    </div>
    <TheModal
      v-if="isShowModal"
      component="AddEmployeeModal"
      :data="{allEmployees}"
      @closeModal="closeModal"
      @setEmpoloyee="setEmpoloyee"
    />
  </div>
</template>

<script>
// utils
import { setLocalStorage, getLocalStorage } from '@/assets/js/localStorage'
import sortList from '@/assets/js/sortList'
// components
import VButton from './common/ui/VButton.vue'
import EmployeesListItem from './EmployeesListItem.vue'
import TheModal from './modal/TheModal.vue'
export default {
  name: 'Employees',

  components: {
    VButton,
    EmployeesListItem,
    TheModal
  },

  data () {
    return {
      employeesList: [],
      isShowModal: false,
      allEmployees: [],
      parentId: null,
      sortingBy: 'ascending'
    }
  },

  mounted () {
    const storage = window.localStorage
    if (storage.getItem('employeesList') && storage.getItem('employeesList')) {
      this.employeesList = getLocalStorage('employeesList')
      this.allEmployees = getLocalStorage('allEmployees')
    }
  },

  methods: {
    openModal () {
      this.isShowModal = true
    },

    setEmpoloyee (employee) {
      if (employee.parent) {
        this.parentId = employee.parent
        let parent = this.employeesList.reduce(this.findById, null)
        if (!parent.employeesList) {
          this.$set(parent, 'employeesList', [])
        }
        parent.employeesList.push(employee)
        this.parentId = null
      } else {
        this.employeesList.push(employee)
      }
      this.allEmployees.push({id: employee.id, name: employee.name})
      setLocalStorage('employeesList', this.employeesList)
      setLocalStorage('allEmployees', this.allEmployees)
    },

    findById (acc, el) {
      if (el.id === this.parentId) return el
      if (el.employeesList) return el.employeesList.reduce(this.findById, acc)

      return acc
    },

    sortNested (arr, sortType) {
      arr.reduce((acc, elem) => {
        if (elem.employeesList) {
          acc = elem.employeesList

          if (this.sortingBy === 'ascending') {
            sortList(acc, 'descending', sortType)
          } else {
            sortList(acc, 'ascending', sortType)
          }
          this.sortNested(acc, sortType)

          return acc
        }
      }, [])
    },

    sorting (sortType) {
      if (this.sortingBy === 'ascending') {
        sortList(this.employeesList, 'descending', sortType)
      } else {
        sortList(this.employeesList, 'ascending', sortType)
      }
      this.sortNested(this.employeesList, sortType)
      this.sortingBy = this.sortingBy === 'ascending' ? 'descending' : 'ascending'
    },

    closeModal () {
      this.isShowModal = false
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
    min-width: 700px;
  }

  .EmployeesHeading {
    display: flex;
  }

  .EmployeesName,
  .EmployeesPhone,
  .listItem {
    flex: 1;
  }

  .EmployeesName,
  .EmployeesPhone {
    padding: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
</style>

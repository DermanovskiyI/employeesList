<template>
  <li class="EmployeesListItem">
    <div class="employeeData">
      <div
        v-if="item.employeesList"
        class="moreEmployees"
        @click="isShowMoreEmployees = !isShowMoreEmployees"
      >
        {{ isShowMoreEmployees ? '-' : '+' }}
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="phone">{{ item.phone }}</div>
    </div>
    <ul
      v-if="item.employeesList && isShowMoreEmployees"
      class="EmployeesList"
    >
        <EmployeesListItem
          v-for="(item, ndx) in item.employeesList"
          :key="ndx"
          :item="item"
          class="listItem"
        />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'EmployeesListItem',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      isShowMoreEmployees: true
    }
  }

}
</script>

<style scoped>
  .EmployeesListItem {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .employeeData {
    position: relative;
    display: flex;
  }

  .moreEmployees {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .name,
  .phone {
    /* flex: 1; */
    padding: 10px;
    border: 1px solid black;
  }

  .name {
    flex: 1;
  }

  .phone {
    width: 468px;
  }

  .EmployeesList {
    padding-left: 30px;
  }
</style>

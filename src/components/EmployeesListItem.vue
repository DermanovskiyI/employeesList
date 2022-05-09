<template>
  <div class="EmployeesListItem">
    <div class="name">{{ name }}</div>
    <div class="phone">{{ phone }}</div>
  </div>
</template>

<script>
export default {
  name: 'EmployeesListItem',

  props: {
    name: {
      type: String,
      default: ''
    },

    phone: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .EmployeesListItem {
    position: relative;
    display: flex;
  }
  .name,
  .phone {
    flex: 1;
  }

  .name::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 100%;
    background: black;
    transform: translate(-50%, -50%);
  }
</style>

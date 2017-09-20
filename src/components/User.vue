<template>
  <div>
    <app-user-detail :name = "name" :age="age"></app-user-detail>
    <hr>
    <app-user-edit :age="age" @ageWasEdited="age = $event"></app-user-edit>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  export default {
    data () {
      return {
        name: 'Gabriel',
        age: 27
      }
    },
    components:{
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    }
  }
</script>

<style lang="scss">
</style>

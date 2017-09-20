<template>
  <div>
    <app-user-detail
             :name = "name" 
             :age="age" @nameWasReset="name = $event"
             :resetFn="resetName"></app-user-detail>
    <hr>
    <app-user-edit :age="age" @ageWasEdited="age = $event" ></app-user-edit>
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
    methods:{
      resetName(){
        this.name = 'Santos'
      }
    },
    components:{
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
    position: fixed;
    height: 500px;
    width: 1500px
  }
</style>

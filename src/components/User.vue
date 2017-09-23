<template>
  <div>
    <button @click="selectedComponent = 'appUserEdit'">appUserEdit</button>
    <button @click="selectedComponent = 'appUserDetail'">appUserDetail</button>
    <hr>
    <p>{{ selectedComponent }}</p>
    <component :is="selectedComponent" :age="age">Passando pelo slot</component>
    <!-- <app-user-detail
              :name = "name" 
              :age="age"
              @nameWasReset="name = $event"
              :resetFn="resetName"></app-user-detail>
    <hr>
    <app-user-edit 
               :age="age" 
               @ageWasEdited="age = $event"></app-user-edit> -->
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  export default {
    data () {
      return {
        name: 'Gabriel',
        age: 27,

        selectedComponent: 'appUserEdit'
      }
    },
    methods:{
      resetName(){
        this.name = 'Santos'
      }
    },
    components:{
      'appUserDetail': UserDetail,
      'appUserEdit': UserEdit
    }
  }
</script>

<style scoped>
  /* div {
    background-color: lightgreen;
    position: fixed;
    height: 500px;
    width: 1500px
  } */
    p{
      height: 30px;
    }
</style>

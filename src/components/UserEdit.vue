<template>
  <div>
    <h3>You may edit the user here</h3>
    <p>Edit Me!</p>
    <p>User Age: {{ age }}</p>
    <slot></slot>
    <hr>
    <button @click="editAge()">Edit Age</button>
  </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: ['age'],
        methods:{
            editAge(){
              this.age = 30;
//                this.$emit('ageWasEdited', this.age)
//                eventBus.$emit('ageWasEdited', this.age);
              eventBus.changeAge(this.age);
            }
        }
    }
</script>

<style scoped>
  div {
    background-color: gray;
    height: 200px;
    width: 300px;
    position: fixed;
    left: 100px;
    top: 100px;
  }
</style>

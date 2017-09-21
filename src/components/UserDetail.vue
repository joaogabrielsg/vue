<template>
  <div>
    <h3>You may view the User Details here</h3>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{ age }}</p>
    <p>{{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    name: {
      type: String,
      default: 'João'
    },
    resetFn: Function,
    age:Number
  },
  methods:{
    switchName(){
      return this.name.split("").reverse();
    },
    resetName(){
      this.name = 'Santos';
      this.$emit('nameWasReset', this.name);
    }
  },
  created(){
    eventBus.$on('ageWasEdited', (age) => {
        this.age = age
    });
  }
}
</script>

<style scoped>
  div {
    background-color: lightblue;
    height: 200px;
    width: 300px;
    position: fixed;
    right: 100px;
    top: 100px;
  }
</style>

<template>
  <div>
    <h3>You may view the User Details here</h3>
    <p>User Name: {{ name }}</p>
    <p>{{ switchName() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'João'
    }
  },
  methods:{
    switchName(){
      return this.name.split("").reverse();
    }
  }
}
</script>

<style lang="scss">
</style>

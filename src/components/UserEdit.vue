<template>
  <div>
    <h3>You may edit the user here</h3>
    <p>Edit Me!</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge()">Edit Age</button>
  </div>
</template>

<script>
    export default {
        props: ['age'],
        methods:{
            editAge(){
                this.age = 30;
                this.$emit('ageWasEdited', this.age)
            }
        }
    }
</script>

<style lang="scss">
</style>

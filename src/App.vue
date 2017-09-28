<template>
  <div> 
    <app-form></app-form>
  </div>
</template>

<script>
import User from './components/User.vue'
import Form from './components/Form.vue'

export default {
  name: 'app',

  components:{
    'app-user': User,
    'app-form': Form
  }
}
</script>

<style lang="scss">
</style>

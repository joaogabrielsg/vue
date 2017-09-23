<template>
  <div>
    <app-user></app-user>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  name: 'app',

  components:{
    'app-user': User
  }
}
</script>

<style lang="scss">
</style>

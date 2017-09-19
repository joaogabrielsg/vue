<template>
  <app-user-detail :name = "name"></app-user-detail>
</template>

<script>
import UserDetail from './UserDetail.vue'

export default {
  data () {
    return {
      name: 'Gabriel'
    }
  },
  components:{
    'app-user-detail': UserDetail
  }
}
</script>

<style lang="scss">
</style>

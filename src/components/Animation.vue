<template>
  <div>
      <h1>Animations</h1>
      <hr>
      <button @click="show = !show">Show Alert</button>
      <transition>
          <div v-if="show">This is some info</div>
      </transition>
  </div>
</template>
<script>

export default {
    data(){
        return{
            show: false
        }
    }
}
    
</script>
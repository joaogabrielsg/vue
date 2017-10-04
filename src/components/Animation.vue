<template>
  <div>
      <h1>Animations</h1>
      <hr>
      <button @click="show = !show">Show Alert</button>
      <transition name="fade">
          <div v-if="show">This is some info</div>
      </transition>

      <transition name="slide" type="animation">
          <div v-show="show">This is some info</div>
      </transition>

      <transition name="slide" appear>
          <div v-if="show">This is some info</div>
      </transition>
  </div>
</template>
<script>

export default {
    data(){
        return{
            show: true
        }
    }
}
    
</script>

<style>
    .fade-enter{
        opacity: 0;
    }  
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /*opacity: 1; Default Value*/
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
    .slide-enter{
        opacity: 0;
    }  
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }
    .slide-leave{
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        to{
            transform: translateY(20px);
        }
        from{
            transform: translateY(0);
        }
    }
</style>

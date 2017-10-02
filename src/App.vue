<template>
  <div> 
    <!--<app-form></app-form>
  <div>-->
    <!-- <app-user></app-user> -->

    <!-- <label for="sendmail">
      <input type="checkbox" id="sendail" value="send a mail" v-model="sendMail"> Send Mail
    </label>

    <label for="sendinfomail">
      <input type="checkbox" id="sendinfomail" value="send information mail" v-model="sendMail"> Send InfoMail
    </label>
  
    <hr>

    <ul>
      <li v-for="mail in sendMail">{{ mail }}</li>
    </ul>

    <hr>

    <input type="radio" value="male" v-model="gener">Male

    <input type="radio" value="female" v-model="gener">Female  

    <hr>

    <select name="City">
      <option v-for="city in cities" :selected="city == 'Rio de Janeiro'">{{ city }}</option>
    </select> -->

    <!--<app-mydirectives v-highlight:background="'blue'"></app-mydirectives>

    <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Teste do highlight</p>

    <p>{{ gener | toUppercase | to-lowercase }}</p>

    <input v-model="filterText">
    <ul>
      <li v-for="item in filteredCities">{{ item }}</li>
    </ul>-->

    <app-animation></app-animation>

  </div>
</template>

<script>

import User from './components/User.vue'
import Form from './components/Form.vue'
import MyDirectives from './components/MyDirectives.vue'
import Animation from './components/Animation.vue'

export default {
  name: 'app',
  data(){
    return{
      sendMail: [],
      gener: 'male',
      cities: ['Fortaleza', 'Rio de Janeiro', 'São Paulo'],
      filterText:''
    }
  },

  computed:{
    filteredCities(){
      return this.cities.filter((element) => {
        return element.match(this.x);
      })
    }
  },

  components:{
    'app-user': User,
    'app-form': Form,
    'app-mydirectives': MyDirectives,
    'app-animation': Animation
  },
  directives:{
    'local-highlight':{
      bind(el, binding, vnode){

        var delay = 0;
        if(binding.modifiers['delayed']){
          delay = 3000;
        }
        if(binding.modifiers['blink']){
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if(binding.arg == 'background'){
                el.style.backgroundColor = currentColor;
              }else{
                el.style.color = currentColor;
              }
            }, binding.value.delay)
          }, delay)
        }else{
          setTimeout(() => {
            if(binding.arg == 'background'){
              el.style.backgroundColor = binding.value.mainColor;
            }else{
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  },

  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
</style>
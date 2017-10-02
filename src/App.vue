<template>
  <div> 
    <app-form></app-form>
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

    <app-mydirectives v-highlight:background="'blue'"></app-mydirectives>


  </div>
</template>

<script>

import User from './components/User.vue'

import Form from './components/Form.vue'

import MyDirectives from './components/MyDirectives.vue'

export default {
  name: 'app',
  data(){
    return{
      sendMail: [],
      gener: 'male',
      cities: ['Fortaleza', 'Rio de Janeiro', 'São Paulo']
    }
  },

  components:{
    'app-user': User,
    'app-form': Form,
    'app-mydirectives': MyDirectives
  }
}
</script>

<style lang="scss">
</style>

import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';

    // el.style.backgroundColor = binding.value;


    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


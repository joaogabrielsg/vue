<template>
    <div>
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <br>
        <button @click="show = !show">Show Alert</button>

        <transition name="alertAnimations">
            <div v-if="show">This is some info</div>
        </transition>

        <transition name="slide" type="animation">
            <div v-show="show">This is some info</div>
        </transition>

        <transition name="slide" appear>
            <div v-if="show">This is some info</div>
        </transition>
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
            <div v-if="show">This is some Info 2</div>
        </transition>

        <br>

        <input type="text" v-model="animation" mode="out-in">
        <transition :enter-active-class="animation" :leave-active-class="animation">
            <div v-if="show" key="info">This is some Info teste</div>
            <div v-else key="warning">This is a warning</div>
        </transition>
        <br>
        <button @click="toggleComponent">Toggle</button>

        <transition name="fade">
            <component :is="selectedComponent"></component>
        </transition>

        <hr>

        <button @click="addItem">Add Item</button>

        <ul>
            <transition-group name="slide">
                <li v-for="(number, index) in numbers" @click="removeItem(index)" style="cursos: pointer" key="numbers">{{ number }}</li>
            </transition-group>
        </ul>

    </div>
</template>
<script>

import DangerAlert from './DangerAlert.vue'
import SuccessAlert from './SuccessAlert.vue'

export default {
    data() {
        return {
            show: true,
            alertAnimation: 'fade',
            animation: '',
            selectedComponent: 'app-success-alert',
            numbers: [1, 2, 3, 4, 5]
        }
    },
    components: {
        appDangerAlert: DangerAlert,
        appSuccessAlert: SuccessAlert
    },
    methods: {
        toggleComponent() {
            console.log(this.selectedComponent)
            if (this.selectedComponent == 'app-success-alert') {
                this.selectedComponent = 'app-danger-alert'
            } else {
                this.selectedComponent = 'app-success-alert'
            }
        },
        addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);
        },
        removeItem(index) {
            this.numbers.splice(index, 1);
        }
    }
}

</script>

<style>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {
    /*opacity: 1; Default Value*/
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave {}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

.slide-move{
    transition: transform 1s;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    to {
        transform: translateY(20px);
    }
    from {
        transform: translateY(0);
    }
}
</style>

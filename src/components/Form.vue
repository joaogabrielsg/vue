<template>
    <div>
        <form>
            <label for="Email">Email</label>
            <input 
                    type="text"
                    v-model="userData.email">

            <label for="Password">Password</label>
            <input 
                    type="text"
                    v-model="userData.password">

            <label for="Age">Age</label>
            <input 
                    type="number"
                    v-model="userData.age">
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            userData:{
                email: '',
                password: '',
                age: 27
            }
        }
    }
}
</script>
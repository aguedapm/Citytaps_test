<template>
    <form @submit="onSubmit">
        <p>
            <label for="username">Username</label>
            <input
                id="username"
                v-model="username"
                type="text"
                username="username"
            >
        </p>
        <p>
            <label for="password">Password</label>
            <input
                id="password"
                v-model="password"
                type="text"
                password="password"
            >
        </p>
        <p>
            <input
            type="submit"
            value="Submit"
            >
        </p>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {

        name: 'Login',
        methods: {
            onSubmit(e) {
                e.preventDefault()
                console.log(e.target);
                console.log(e.target.username.value);
                console.log(e.target.password.value)

                axios.post('http://127.0.0.1:3000/login', {
                    username: e.target.username.value,
                    password: e.target.password.value
                })
                .then(res => {
                console.log(res)
                localStorage.setItem("token", res.headers["x-access-token"])
                console.log('token',localStorage.getItem("token"))
                })
            }
        }
    }
</script>

<style scoped>

    label {
        margin: 10px;
    }

</style>
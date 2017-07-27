<template>
    <md-layout md-flex md-flex-medium="33" md-hide-small>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>Initial value</label>
                <md-input v-model="username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
                <label>Password Reveal</label>
                <md-input v-model="password" type="password"></md-input>
            </md-input-container>
        </form>
    </md-layout>
</template>

<script>
    export default {
        data() {
            return {
                password: '',
                username: '',
            };
        }
    }
</script>

<style lang="sass">

</style>
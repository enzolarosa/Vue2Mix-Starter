<template>
    <div id="app">
        <md-toolbar>

            <h2 class="md-title">{{message}}</h2>
        </md-toolbar>
        <div>
<md-layout></md-layout>
        </div>
    </div>
</template>

<script>
    import MdLayout from "../../../node_modules/vue-material/src/components/mdLayout/mdLayout.vue";

    export default {
        components: {MdLayout},
        data() {
            return {
                message: "Hello"
            };
        }
    }
</script>

<style lang="sass">

</style>
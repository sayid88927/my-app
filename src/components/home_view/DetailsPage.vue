<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "DetailsPage",
        data() {
            return {
                id: null,
            }
        },

        mounted: function () {
            this.getRouterData()
        },
        methods: {
            getRouterData: function () {
                this.id = this.$route.params.id
                console.log("DetailsPage-----------"+
                this.id)
            },
        }
    }
</script>

<style scoped>

</style>

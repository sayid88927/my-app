<template>

    <div>
        <ImgList style="margin-top: 30px"> </ImgList>
    </div>
</template>

<script>
    export default {
        name: "girl",
        components: {
            ImgList : () => import('@/components/gril_view/ImgList.vue'),

        }
    }
</script>

<style scoped>

</style>

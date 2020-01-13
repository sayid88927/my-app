<template>
    <v-app id="app">
        <!--<ToolBar/>-->
        <Carousels style="margin-top: 30px"> </Carousels>
        <NewImgList style="margin-top:-15px"> </NewImgList>
        <HotImgList style="margin-top:-20px"></HotImgList>
        <SlideGroups style="margin-top:-20px"></SlideGroups>
        <HdImgGroup style="margin-top:-20px"></HdImgGroup>
        <GoddessRanking style="margin-top:-20px"></GoddessRanking>
    </v-app>
</template>

<script>
    export default {
        name: "home",
        components: {
            // ToolBar: () => import('@/components/home_view/ToolBar.vue'),
            Carousels : () => import('@/components/home_view/Carousels.vue'),
            NewImgList : () => import('@/components/home_view/NewImgList.vue'),
            HotImgList : () => import('@/components/home_view/HotImgList.vue'),
            SlideGroups : () => import('@/components/home_view/SlideGroups.vue'),
            HdImgGroup : () => import('@/components/home_view/HdImgGroup.vue'),
            GoddessRanking : () => import('@/components/home_view/GoddessRanking.vue'),
        }
    }
</script>


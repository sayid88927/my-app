<template>
  <v-app id="app">
    <ToolBar style="margin-top:-60px"></ToolBar>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
    export default {
        name: 'app',
        components: {
            ToolBar: () => import('./components/ToolBar.vue'),
            // Carousels : () => import('./components/home_view/Carousels.vue'),
            //  Home:()=>import('@/components/Home.vue'),
            Footer:()=>import('./components/Footer.vue'),

        }
    }
</script>

<style>


</style>

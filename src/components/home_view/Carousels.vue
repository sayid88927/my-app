<template>
    <v-container>
        <v-carousel
                cycle
                hide-delimiter-background
                hide-delimiters
                show-arrows-on-hover
                height="200" >

            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition">
            </v-carousel-item>

        </v-carousel>
    </v-container>
</template>

<script>
    import http from '@/providers/http'
    import api from '@/providers/api'
    export default {
        name: "Carousels",
        data() {
            return {
                items: [],
            }
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData: async function () {
                // const res = await http.get(api.carousels)
                // if(res.data.code===0){
                //     this.items=res.data.data;
                // }
            }
        }
    }
</script>

<style >

</style>

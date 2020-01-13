<template>
    <v-container>



        <v-card>
            <v-btn class="title ml-3 mt-2" color="primary" dark>最新图片</v-btn>
            <v-divider class="mt-2 "></v-divider>

                <v-container>
                    <v-layout row    class="mx-auto">
                        <v-flex xs3 sm2 md1
                                v-for="n in 11"
                                :key="n">
                            <v-hover v-slot:default="{ hover }"
                                     open-delay="100">
                                <v-card
                                        outlined
                                        light
                                        class="ml-1"
                                        :elevation="hover ? 10 : 2">

                                    <v-img
                                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                            aspect-ratio="1">
                                    </v-img>

                                    <span class=".title">暗夜系的</span>

                                </v-card>

                            </v-hover>


                        </v-flex>
                    </v-layout >
                </v-container>

        </v-card>



    </v-container>
</template>

<script>
    export default {
        name: "HdImgGroup"
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <v-card>
            <v-btn class="title ml-3 mt-2" color="primary" dark>最新图片</v-btn>
            <v-divider class="mt-2 "></v-divider>
            <v-container>
                <v-layout row>
                    <v-flex xs6 sm4 md3
                            v-for="n in 10"
                            :key="n">
                        <v-hover v-slot:default="{ hover }"
                                 open-delay="100">

                            <v-card
                                    outlined
                                    :elevation="hover ? 16 : 2"
                                    class="mx-1 mb-2">
                                <v-img
                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                        aspect-ratio="1">
                                </v-img>
                                <span class=".title">暗夜系的果儿Victoria 若隐若现的美人</span>
                                <v-divider></v-divider>
                                <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
                                <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>

                            </v-card>
                        </v-hover>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ImgList",
        data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>

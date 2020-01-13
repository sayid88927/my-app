<template>
    <v-container>

        <v-card>

            <v-btn-toggle
                    v-model="tab"
                    outlined mandatory
                    background-color="grey lighten-3"
                    retain-focus-on-click
                    :click="onChange()">
                <v-btn width="80" class="title font-weight-medium">地域</v-btn>

                <v-btn width="80" class="title font-weight-medium">身材</v-btn>

                <v-btn width="80" class="title font-weight-medium">体征</v-btn>

                <v-btn width="80" class="title font-weight-medium">组合</v-btn>

                <v-btn width="80" class="title font-weight-medium">职业</v-btn>

            </v-btn-toggle>


            <v-tabs-items v-model="tab">

                <v-tab-item>
                    <v-card flat color="basil">
                        <v-item-group
                                mandatory
                                active-class="primary">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs2 sm2 md1
                                            v-for="n in 11"
                                            :key="n">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-card
                                                    class="mx-1 mb-2"
                                                    height="80"
                                                    @click="toggle">
                                                <v-img
                                                        height="60"
                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                        aspect-ratio="1">
                                                </v-img>
                                                <v-divider></v-divider>
                                                <span class="d-flex align-center">若隐若现</span>

                                                <v-scroll-y-transition>
                                                    <div v-if="active">
                                                    </div>
                                                </v-scroll-y-transition>
                                            </v-card>
                                        </v-item>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-item-group>
                    </v-card>
                </v-tab-item>


                <v-tab-item>
                    <v-card flat color="basil">
                        <v-item-group
                                mandatory
                                active-class="primary">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs2 sm2 md1
                                            v-for="n in 11"
                                            :key="n">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-card
                                                    class="mx-1 mb-2"
                                                    height="80"
                                                    @click="toggle">
                                                <v-img
                                                        height="60"
                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                        aspect-ratio="1">
                                                </v-img>
                                                <v-divider></v-divider>
                                                <span class="d-flex align-center">若隐若现</span>

                                                <v-scroll-y-transition>
                                                    <div v-if="active">
                                                    </div>
                                                </v-scroll-y-transition>
                                            </v-card>
                                        </v-item>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-item-group>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat color="basil">
                        <v-item-group
                                mandatory
                                active-class="primary">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs2 sm2 md1
                                            v-for="n in 11"
                                            :key="n">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-card
                                                    class="mx-1 mb-2"
                                                    height="80"
                                                    width="80"
                                                    @click="toggle">
                                                <v-img
                                                        height="60"
                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                        aspect-ratio="1">
                                                </v-img>
                                                <v-divider></v-divider>
                                                <span class="d-flex align-center">若隐若现</span>

                                                <v-scroll-y-transition>
                                                    <div v-if="active">
                                                    </div>
                                                </v-scroll-y-transition>
                                            </v-card>
                                        </v-item>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-item-group>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat color="basil">
                        <v-item-group
                                mandatory
                                active-class="primary">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs2 sm2 md1
                                            v-for="n in 11"
                                            :key="n">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-card
                                                    class="mx-1 mb-2"
                                                    height="80"
                                                    @click="toggle">
                                                <v-img
                                                        height="60"
                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                        aspect-ratio="1">
                                                </v-img>
                                                <v-divider></v-divider>
                                                <span class="d-flex align-center">若隐若现</span>

                                                <v-scroll-y-transition>
                                                    <div v-if="active">
                                                    </div>
                                                </v-scroll-y-transition>
                                            </v-card>
                                        </v-item>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-item-group>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat color="basil">
                        <v-item-group
                                mandatory
                                active-class="primary">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs2 sm2 md1
                                            v-for="n in 11"
                                            :key="n">
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-card
                                                    class="mx-1 mb-2"
                                                    height="80"
                                                    @click="toggle">
                                                <v-img
                                                        height="60"
                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                        aspect-ratio="1">
                                                </v-img>
                                                <v-divider></v-divider>
                                                <span class="d-flex align-center">若隐若现</span>

                                                <v-scroll-y-transition>
                                                    <div v-if="active">
                                                    </div>
                                                </v-scroll-y-transition>
                                            </v-card>
                                        </v-item>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-item-group>
                    </v-card>
                </v-tab-item>

            </v-tabs-items>

        </v-card>


        <v-card style="margin-top: 5px">
            <v-btn class="title ml-3 mt-2" color="primary" dark>最新图片</v-btn>
            <v-divider class="mt-2 "></v-divider>
            <v-container>
                <v-layout row>
                    <v-flex xs6 sm4 md2
                            v-for="n in 50"
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

            <div class="text-center">
                <v-pagination
                        circle
                        v-model="page"
                        :length="15"
                        :click="onChangePage()"
                        :total-visible="7"
                ></v-pagination>
            </div>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ImgList",

        data() {
            return {
                page: 1,
                tab: 0,
                pstion: 0,
            }
        },
        methods: {
            onChangePage: function () {
                //  console.log(this.page)
            },
            onChange: function () {
                console.log(this.tab)
            },
        }

    }
</script>

<style scoped>

</style>

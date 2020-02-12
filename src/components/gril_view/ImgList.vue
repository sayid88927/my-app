<template>
    <v-container>
        <v-card style="margin-top: 5px">
            <v-btn class="title ml-3 mt-2" color="primary" dark>最新图片</v-btn>
            <v-divider class="mt-2 "></v-divider>
            <v-container>
                <v-layout row>
                    <template v-for="(item, n) in grilImgs">
                        <v-flex xs6 sm4 md3
                                :key="n">
                            <v-hover v-slot:default="{ hover }"
                                     open-delay="100">

                                <v-card
                                        outlined
                                        :elevation="hover ? 16 : 2"
                                        class="mx-1 mb-2">
                                    <v-img
                                            @click="JumpDetails(item.id,item.title)"
                                            :src="item.imgurl"
                                            aspect-ratio="1">
                                    </v-img>
                                    <div @click="JumpDetails(item.id,item.title)" class="pl-2 title  text-truncate" v-text="item.title"></div>

                                    <v-divider></v-divider>

                                    <v-row no-gutters dense>
                                        <template v-for="n in 6">
                                            <v-col
                                                    :key="n"
                                                    v-if="n<item.tagsVo.length">
                                                    <v-btn dark  small color="primary caption  text-truncate ma-1"
                                                           style="max-width: 80px;"
                                                           @click="JumpTagDetails(item.tagsVo[n].tagid)"
                                                           v-text="item.tagsVo[n].tag">
                                                    </v-btn>
                                            </v-col>
                                            <template v-else></template>
                                        </template>
                                    </v-row>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </template>
                </v-layout>

                    <div style="margin-bottom: 50px">
                        <vue-pager
                                :tem_cur="tem_cur"
                                :all="all"
                                v-on:pageClick="pageClick"
                                >
                        </vue-pager>

                    </div>

            </v-container>

        </v-card>
    </v-container>
</template>

<script>
    import http from '@/providers/http'
    import api from '@/providers/api'
    import vuePager from '@/js/page-break'
    export default {
        name: "ImgList",
        data() {
            return {
                tag:'' ,
                tagsVo:{ //创建空对象
                    tag:null,
                    tagid:null,
                },
                grilImgs: {},
                tgs: {},
                overlay: null,
                tem_cur: 1,
                all: null,
            }
        },

        mounted: function () {
            this.fetchData(this.page)
        },
        methods: {

            fetchData: async function (pageNum) {
                const res = await  http.get(api.getGrilimgsVoByCondition,
                    {pageNum: pageNum, pageSize: 5}
                )
                console.log(res)
               this.all = res.data.pages
                this.grilImgs = res.data.list
            },
            JumpDetails: function (id,title) {
                this.$router.push({
                    path: '/details',
                    query: {id: id,title:title}
                })
            },
             JumpTagDetails: function (id) {
                this.$router.push({
                    path: '/tagdetailspage',
                    query: {id: id}
                })
           },
            pageClick:function(page){
                this.fetchData(page)
            },
        },
        components:{
            'vue-pager': vuePager,  //子组件
        },
    }
</script>

<style>

</style>

<template>
    <v-container>
        <v-card style="margin-top: 35px">

            <v-card>

                <v-tabs
                        show-arrows
                        background-color="blue darken-2"
                        fixed-tabs
                        :value="value"
                        center-active
                        dark>

                    <v-tab
                            v-for="(item, index) in items"
                            :key="index"

                            @click="onChangePage(item.id)"
                            class="title text-truncate">
                        {{ item.tag}}
                    </v-tab>

                </v-tabs>

            </v-card>

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
                                    <div @click="JumpDetails(item.id,item.title)" class="pl-2 title  text-truncate"
                                         v-text="item.title"></div>

                                    <v-divider></v-divider>

                                    <v-row no-gutters dense>
                                        <template v-for="n in 6">

                                            <v-col
                                                    :key="n"
                                                    v-if="n<item.tagsVo.length">
                                                <v-btn dark small color="primary caption  text-truncate ma-1"
                                                       style="max-width: 80px;"
                                                       @click="onChangePage(item.tagsVo[n].tagid)"
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
            </v-container>

            <div class="text-center">
                <v-pagination
                        circle
                        v-model="page"
                        :length="15"
                        :total-visible="7"
                ></v-pagination>
            </div>
        </v-card>
    </v-container>
</template>


<script>

    import http from '@/providers/http'
    import api from '@/providers/api'

    export default {
        name: "DetailsImg",
        data() {
            return {
                id: null,
                tagsVo: { //创建空对象
                    tag: null,
                    tagid: null,
                },
                value: null,
                page: 1,
                tab: 0,
                pstion: 0,
                grilImgs: {},
                tgs: {},
                datas: {},
                items: [],
            }
        },
        mounted: function () {
            this.getRouterData(),
            this.fetchData()
             this.selectTag()
        },
        methods: {
            getRouterData: function () {
                this.id = this.$route.query.id
                //console.log(this.id)
            },
            fetchData: async function () {
                const res = await http.get(api.grilImgsTagId, {Id: this.id})
                this.grilImgs = res.data;
            },
            async selectTag() {
                const res = await http.get(api.selectTag)
                this.items = res.data;
                // var id = parseInt(this.id)
                this.items.map((item, index) => {
                    // console.log(typeof (this.id));
                    if (item.id === parseInt(this.id)) {
                        this.value = index
                    }
                })
            },
            async onChangePage(id) {
                const res = await http.get(api.grilImgsTagId, {Id: id})
                this.grilImgs = res.data;
                // console.log(typeof (id));
                this.items.map((item, index) => {
                    if (item.id=== parseInt(id)) {
                        this.value = index
                    }
                })
            },
            JumpDetails: function (id,title) {
                this.$router.push({
                    path: '/details',
                    query: {id: id,title:title}
                })
            },
        },
    }
</script>

<style>

</style>

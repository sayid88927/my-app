<template>
    <div>
        <v-container style="margin-top: 35px">
            <v-card>
                <p style="height: 50px;line-height: 70px;"
                   class="font-weight-medium title text-center">{{this.title}}</p>

                <span  style="font-size: 12px; color:#666"   class="ma-4">
                    {{this.detailupdatetime}}
                </span>

                <span  style="font-size: 12px; color:#bf382b">
                     共 {{this.num}} 张
                </span>

                <span  style="font-size: 12px; color:#bf382b" class="ma-2">
                     第 {{this.page}} 张
                </span>

                <v-img
                        class="ma-4"
                        :src="imgurl"></v-img>

                <div>0
                    <p class="text-justify ma-4 subtitle-1">
                        {{this.detail}}
                    </p>
                </div>

                <v-row
                        class="ma-4"
                        no-gutters>
                    <v-col
                            md="auto"
                            v-for="(item,i) in tagsVo"
                            :key="i"
                    >
                        <v-btn
                                color="error"
                                title light
                                class="ma-1 text-center font-weight-black	"
                                small
                                @click="JumpTagDetails(item.tagid)"
                        >{{item.tag}}</v-btn>

                    </v-col>
                </v-row>
                
                <div class="text-center">
                    <v-pagination
                            circle
                            :click="onChangePage()"
                            v-model="page"
                            :length="length"
                            :total-visible="7"
                    ></v-pagination>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import http from '@/providers/http'
    import api from '@/providers/api'

    export default {
        name: "DetailsImg",
        data() {
            return {
                id: null,
                page: 1,
                title: '',
                imgurl: '',
                length: null,
                data: null,
                detail: null,
                detailupdatetime:null,
                num:null,
                tagsVo: {
                    tag: null,
                    tagid: null,
                }
            }
        },
        mounted: function () {
            this.getRouterData()
            this.fetchData()
            this.selectByGrilimgsId()
        },
        methods: {
            getRouterData: function () {
                this.id = this.$route.query.id
                //    this.title = this.$route.query.title
            },
            async selectByGrilimgsId() {
                const res = await http.get(api.selectByGrilimgsId, {Id: this.id})
                console.log(res)
                this.title = res.data.title
                this.detail = res.data.detail
                this.tagsVo = res.data.tagsVo
                this.detailupdatetime = res.data.detailupdatetime
                this.num = res.data.num
            },

            async fetchData() {
                const res = await http.get(api.grilImgsId, {Id: this.id})
                this.data = res.data
                this.imgurl = this.data[this.page - 1].imgUrl
                this.length = this.data.length
            },
            onChangePage: function () {
                this.imgurl = this.data[this.page - 1].imgUrl
            },
            JumpTagDetails: function (id) {
                this.$router.push({
                    path: '/tagdetailspage',
                    query: {id: id}
                })
            },
        },
    }
</script>

<style>

</style>

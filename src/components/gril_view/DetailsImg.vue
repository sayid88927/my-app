<template>
    <div>
        <v-container style="margin-top: 35px">
            <v-card>
                <p style="height: 50px;line-height: 70px;"
                   class="font-weight-medium title text-center">{{this.title}}</p>
                <v-img
                        class="ma-4"
                        :src="imgurl"></v-img>
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
                data:null,
            }
        },
        mounted: function () {
            this.getRouterData()
            this.fetchData()
        },
        methods: {
            getRouterData: function () {
                this.id = this.$route.query.id
                this.title = this.$route.query.title
                //console.log(  this.id)
            },
            async fetchData() {
                const res = await http.get(api.grilImgsId, {Id: this.id})
                this.data = res.data
              //console.log(this.page)
                this.imgurl = this.data[this.page-1].imgUrl
              //console.log(this.imgurl)
                this.length = this.data.length
            },
            onChangePage: function () {
             //console.log(this.page)
                this.imgurl = this.data[this.page-1].imgUrl
            },
        },
    }
</script>

<style>

</style>

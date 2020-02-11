<template>

    <v-container>

        <v-app-bar
                app
                color="blue darken-2">
            <v-app-bar-nav-icon style="margin-left: 5px"
                                class="hidden-md-and-up grey lighten-4"
                                @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-card
                    style="margin-left: 40px"
                    class="mx-auto"
                    width="100"
                    height="50">
                <v-img
                        max-width="100"
                        max-height="50"
                        src="@/assets/jach.png"
                ></v-img>
            </v-card>

            <v-tabs
                    app
                    class="hidden-sm-and-down"
                    background-color="blue darken-2"
                    fixed-tabs
                    center-active
                    dark>

                <v-tab
                        v-for="(item, index) in items"
                        :key="index"
                        :to="item.path"
                        class="title">
                     {{ item.title}}
                </v-tab>

            </v-tabs>
        </v-app-bar>

        <v-navigation-drawer
                app
                v-model="drawer"
                temporary>
            <v-list
                    shaped>
                <v-list-item-group
                        v-model="group"
                        color="primary">
                    <template v-for="(item, index) in items">
                        <v-list-item
                                :key="index">

                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>

                        <!--<v-divider-->
                                <!--v-if="index + 1 < items.length"-->
                                <!--:key="item.id">-->
                        <!--</v-divider>-->
                    </template>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
    import http from '@/providers/http'
    import api from '@/providers/api'
    export default {
        name: "ToolBar",
        data: () => ({
            drawer: false,
            group: null,
            logoSrc: '@/assets/and.png',
            items: [],
        }),
        watch: {
            group() {
                this.drawer = false
            },
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData: async function () {
                const res = await http.get(api.boolbar)
              //  console.log(res)
                if(res.code===0){
                    this.items=res.data;
                }
            }
        }
    }
</script>

<style>

</style>

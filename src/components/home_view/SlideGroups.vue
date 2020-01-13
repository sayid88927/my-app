<template>

    <v-container>

        <v-sheet
                class="mx-auto"
                elevation="8">
            <v-btn class="title ml-3 mt-2" color="primary" dark>最新图片</v-btn>
            <v-divider class="mt-2 "></v-divider>

            <v-slide-group
                    v-model="model"
                    light
                    show-arrows
                    center-active>
                <v-slide-item
                        v-for="n in 15"
                        :key="n"
                        v-slot:default="{ active, toggle }">

                    <v-hover v-slot:default="{ hover }">

                        <v-card
                                class="ma-1"
                                height="250"
                                width="250"
                                @click="toggle">

                            <v-img
                                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                    aspect-ratio="1">
                            </v-img>

                            <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="grey lighten-1 darken-2 v-card--reveal display-3 white--text"
                                        style="height: 20%;">
                                    $14.99
                                </div>
                            </v-expand-transition>

                        </v-card>

                    </v-hover>

                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </v-container>

</template>

<script>
    export default {
        name: "SlideGroups",
        data: () => ({
            model: null,
        }),
    }
</script>

<style>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>

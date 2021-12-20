<template>
    <div class="navigation-drawer"
         :class="{hide : !mainActive}"
    >
        <div class="navigation-drawer__details">
            <ul class="navigation-drawer__menu">
                <li class="navigation-drawer__menu-item"
                    v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.path" class="" exact="">
                        <img :src="item.icon" alt="">
                        <span class=""> {{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapState, mapMutations} from "vuex"

    export default {
        name: "TheNavigationDrawer",
        data() {
            return {
                menu: [
                    {
                        icon: "/assets/icons/routes.svg",
                        title: "Маршуртлар",
                        path: "/"
                    },
                    {
                        icon: "/assets/icons/drivers.svg",
                        title: "Хайдовчилар",
                        path: "/drivers"
                    },
                    {
                        icon: "/assets/icons/bus.svg",
                        title: "Автобус",
                        path: "/bus"
                    },
                    {
                        icon: "/assets/icons/monitoring.svg",
                        title: "Мониторинг",
                        path: "/monitoring"
                    },
                    {
                        icon: "/assets/icons/routes-cars.svg",
                        title: "Маршуртлар-машиналар",
                        path: "/routes-cars"
                    },
                    {
                        icon: "/assets/icons/location.svg",
                        title: "Манзиллар",
                        path: "/addresses"
                    },
                    {
                        icon: "/assets/icons/settings.svg",
                        title: "Созламалар",
                        path: "/settings"
                    },

                ],
            }
        },
        computed: {
            ...mapState({mainActive: 'mainActive'})
        },
        methods: {
            ...mapMutations({toggleMenu: 'toggleMenu'}),
        }

    }
</script>

<style lang="scss" scoped>

.navigation-drawer {
  display: none;
}

</style>
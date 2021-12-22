import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "/",
                name: "Main",
                component: () => import("../views/Main.vue"),
            },

            {
                path: "/news",
                name: "News",
                component: () => import("../views/News.vue"),
            },
            {
                path: "/news/:id",
                name: "News",
                component: () => import("../views/NewsInner.vue"),
            },

            {
                path: "/details",
                name: "Details",
                component: () => import("../views/Details.vue"),
            },
            {
                path: "/course/:id",
                name: "Course",
                component: () => import("../views/Course.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;
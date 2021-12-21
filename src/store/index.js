import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainActive: false,
        windowWidth: null,
    },
    getters: {},
    mutations: {
        setWindowWidth(state, newWidth) {
            state.windowWidth = newWidth;
        },
        toggleMenu: (state) => {
            state.mainActive = !state.mainActive
        }
    },
    actions: {},
});

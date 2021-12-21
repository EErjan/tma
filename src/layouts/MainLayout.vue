<template>
  <div>
    <TheNavigationDrawer
        @toggleMenu="toggleMenu"
    />
    <TheHeader/>
    <main class="main">
      <router-view/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavigationDrawer from "../components/layouts/TheNavigationDrawer";
import {mapState, mapMutations} from "vuex"
import TheHeader from "../components/layouts/TheHeader";
import TheFooter from "../components/layouts/TheFooter";

export default {
  name: "MainLayout",
  components: {TheFooter, TheHeader, TheNavigationDrawer},
  data() {
    return {}
  },
  computed: {
    ...mapState({mainActive: 'mainActive'})
  },
  methods: {
    ...mapMutations(['setWindowWidth']),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    ...mapMutations({toggleMenu: 'toggleMenu'}),
  },

  mounted() {
    this.setWidth();
    window.addEventListener('resize', this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWidth);
  },
}

</script>

<style lang="scss" scoped>
</style>
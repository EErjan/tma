<template>
  <div>
    <TheNavigationDrawer
        @toggleMenu="toggleMenu"
    />
    <TheHeader/>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheNavigationDrawer from "../components/layouts/TheNavigationDrawer";
import {mapState, mapMutations} from "vuex"
import TheHeader from "../components/layouts/TheHeader";

export default {
  name: "MainLayout",
  components: {TheHeader, TheNavigationDrawer},
  data() {
    return {}
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
</style>
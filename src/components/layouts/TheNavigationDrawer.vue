<template>
  <div>
    <div class="navigation-drawer"
         :class="{hide : !mainActive}"
    >
      <div class="navigation-drawer__details">
        <ul class="navigation-drawer__menu">
          <li class="navigation-drawer__menu-item"
              v-for="(item, index) in menu" :key="index">
            <a :href="item.path">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="backdrop"
         v-if="isDesktopSmall"
         @click="toggleMenu"
         :class="{hide : !mainActive }"
    >

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
          title: "О нас",
          path: "/"
        },
        {
          title: "Курсы",
          path: "/courses"
        },
        {
          title: "Преподаватели",
          path: "/teachers"
        },
        {
          title: "Новости",
          path: "/news"
        },
        {
          title: "Контакты",
          path: "/contacts"
        },
      ]
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

  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  overflow: auto;
  background-color: white;
  max-width: 400px;
  width: 100%;
  z-index: 100;
  transition: .3s;
  padding: 30px;


  &.hide {
    left: -100%;
  }

  &__details {

  }

  &__menu {
    &-item {
      a {
        display: flex;
        padding: 10px 15px;
        font-weight: 700;
        transition: .3s;

        &.active {
          background-color: var(--color-bg);
        }

        &:hover {
          background-color: var(--color-bg);
        }

      }
    }
  }

}

.backdrop {
  width: 100%;
  height: 100%;
  left: 0;
  position: fixed;
  z-index: 90;
  transition: .3s;
  background-color: rgba(0, 0, 0, 0.40);

  &.hide {
    left: -100%;
    opacity: 0;
    transition: .3s;
  }
}

</style>
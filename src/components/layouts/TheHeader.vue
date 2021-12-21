<template>
  <header class="header section-bg">
    <div class="my-container">
      <div class="header__wrap">
        <div class="header__left">
          <a href="#" class="logo">
            <img src="/assets/icons/logo.svg" alt="">
          </a>

          <nav class="header__menu"
               v-if="!isDesktopSmall"
          >
            <ul class="header__menu-wrap">
              <li class="header__menu-item" v-for="(item, index) in menu" :key="index">
                <router-link :to="item.path" class="header__menu-link">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </nav>

        </div>

        <div class="header__right">
          <AppLanguages/>

          <AppButton theme="main" height="40"
                     class="ml-20"
                     sides="15"
                     v-if="isDesktopSmall"
                     @click="toggleMenu"
          >
            <img src="/assets/icons/menu.svg" style="max-width: 20px" alt="">
          </AppButton>

        </div>
      </div>
    </div>
  </header>
</template>

<script>

import AppLanguages from "./AppLanguages";
import AppButton from "../Shared-components/AppButton";
import {mapMutations} from "vuex"

export default {
  name: "TheHeader",
  components: {AppButton, AppLanguages},
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

  methods: {
    ...mapMutations({toggleMenu: 'toggleMenu'}),
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 0;

  .logo {
    margin-right: 60px;

    img {
      max-width: 80px;
      width: 100%;
      object-fit: contain;
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }


  &__left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__menu {
    &-wrap {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &-item {
      margin: 15px 40px 15px 0;

      &:hover {
        .header__menu-link {

          &::before {
            width: 70%;
          }
        }
      }
    }

    &-link {
      position: relative;
      padding: 5px;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      &.nuxt-link-exact-active {
        &::before {
          content: '';
          position: absolute;
          width: 0;
          top: 100%;
          height: 2px;
          background-color: var(--color-main);
          transition: .3s;
        }
      }

      &::before {
        content: '';
        position: absolute;
        width: 0;
        top: 100%;
        height: 2px;
        background-color: var(--color-main);
        transition: .3s;
      }
    }
  }

}

@media (max-width: 1240px) {

  .header__wrap {
    padding: 0 20px;
  }

  .header__menu-item {
    margin: 15px 25px 15px 0;
  }
}

@media (max-width: 991px) {

}

@media (max-width: 768px) {
  .header {
    padding: 20px 0;
  }
}

@media (max-width: 500px) {

  .header__wrap {
    padding: 0;
  }

  .main__banner-wrap {
    min-height: calc(100vh - 114px);
  }

  .header .logo {
    margin-right: 30px;
  }

  .main__banner-img {
    max-width: 200px;
  }

  .main__banner-bg {
    max-width: 330px;
  }

}

</style>
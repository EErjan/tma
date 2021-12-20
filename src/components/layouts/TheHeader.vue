<template>
  <header class="header section-bg">
    <div class="my-container">
      <div class="header__wrap">
        <div class="header__left">
          <a href="#" class="logo">
            <img src="/assets/icons/logo.svg" alt="">
          </a>

          <nav class="header__menu">
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
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import AppLanguages from "./AppLanguages";

export default {
  name: "TheHeader",
  components: {AppLanguages},
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

  methods: {}
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
        font-weight: 700;
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

</style>
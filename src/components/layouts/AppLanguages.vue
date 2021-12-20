<template>
  <div class="languages">
    <img src="/assets/icons/globe.svg" alt="">
    <AppDropdown
        :list="list"
        item-value="id"
        v-model="language"
        item-name="lang"
        placeholder="Ru"
    />
  </div>
</template>

<script>
import AppDropdown from "../Shared-components/AppDropdown";

export default {
  name: 'AppLanguages',
  components: {AppDropdown},
  data() {
    return {
      list: [
        {
          lang: "En",
          id: "en"
        },
        {
          lang: "Ру",
          id: "ru"
        },
        {
          lang: "Uz",
          id: "uz"
        }
      ],
      language: 'Ру'
    }
  },
  methods: {},
  computed: {}
}
</script>
<style lang="scss">


.languages {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;

  .app-dropdown {
    width: 100%;

    &__header {
      border: none;
      background-color: transparent;
      border-radius: 6px;
      position: relative;

      p {
        display: flex;
        text-align: center;
        margin-right: 10px;
      }
    }

    &__menu {
      text-align: center;
      padding: 5px;
      font-size: 14px;
      top: 100%;
      left: -22px;
      min-width: 90px!important;
    }

  }

  .app-dropdown__item {
    justify-content: center;
  }

  .app-dropdown__list-item {
    font-weight: 500;
    justify-content: center;

    &:last-child {
      margin-bottom: 0;
    }
  }

}
</style>

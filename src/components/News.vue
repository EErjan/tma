<template>
  <section class="section">
    <div class="my-container">
      <div class="section__top"
           :class=" isDesktopSmall ? 'mb-30' : 'mb-60'"
      >
        <AppText
            :size="isMobileSmall ? 28 : isMobile ? 34  : isDesktopMedium ? 38 : 42"
            :line-height=" isMobileSmall ? 32 : isMobile ? 38 : isDesktopMedium ? 42 : 46"
            weight="600"
        > Новости
        </AppText>
      </div>

      <div class="section__wrap">

        <AppSlider :list="news"
                   :slide-count="isMobileSmall ? 1 : isMobile ? 2 : 3"
                   class="mb-40 news__slider"
        >
          <template #default="{item}">
            <router-link :to="item.path" class="news__item">
              <div class="news__item-photo">
                <img :src="item.photo" alt="">
              </div>
              <div class="news__item-content">
                <AppText size="20" line-height="22" weight="600" max-lines="1" class="mb-20"> {{ item.title }}</AppText>
                <AppText size="16" line-height="24" max-lines="2" class="text-color mb-20"> {{ item.content }}</AppText>

                <BlockWrap count="2" class="justify-between">
                  <AppText size="16" line-height="24" max-lines="2" class="text-color"> {{ item.created_at }}</AppText>
                  <img src="/assets/icons/arrow-right-blue.svg" style="max-width: 16px" alt="">
                </BlockWrap>

              </div>

            </router-link>
          </template>
        </AppSlider>

        <div class="news__slider-bottom">
          <AppButton theme="white">Все новости</AppButton>
        </div>

      </div>
    </div>

  </section>
</template>

<script>


import AppSlider from "./Shared-components/AppSlider";
import BlockWrap from "./Shared-components/BlockWrap";
import AppButton from "./Shared-components/AppButton";

export default {
  name: "News",
  components: {AppButton, BlockWrap, AppSlider},
  data() {
    return {
      news: [
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
          path: "/"
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="my-container">
    <section class="section-padding">

      <div class="section__top"
           :class=" isDesktopSmall ? 'mb-30' : 'mb-60'"
      >
        <div class="section__title text-center">
          <AppText :size="isMobileSmall ? 28 : isMobile ? 34  : isDesktopMedium ? 38 : 42"
                   :line-height=" isMobileSmall ? 32 : isMobile ? 38 : isDesktopMedium ? 42 : 46"
                   weight="600"
          >
            Новости
          </AppText>
        </div>
      </div>

      <div class="section__wrap">
        <BlockWrap :count="isMobileSmall ? 1 : isMobile ? 2 : isDesktopMedium ? 3 : 4"
                   offset-x="20"
                   offset-y="20"
        >
          <router-link to="/news/1" class="news__item" v-for="(item, idx) in news" :key="idx">
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
        </BlockWrap>
      </div>

    </section>
  </div>
</template>

<script>
import BlockWrap from "../components/Shared-components/BlockWrap";

export default {
  name: "News",
  components: {BlockWrap},
  data() {
    return {
      news: [
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        },
        {
          photo: "/assets/img/news.jpg",
          title: "Название новости",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna biben",
          created_at: "10.12.2021",
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
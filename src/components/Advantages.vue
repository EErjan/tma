<template>
  <section class="section-bg">
    <div class="my-container">
      <div class="section__top"
           :class="isMobileSmall ? 'mb-30' : isDesktopSmall ? 'mb-40' : 'mb-40'"
      >
        <div class="section__title text-center">
          <AppText :size="isMobileSmall ? 28 : isMobile ? 34  : isDesktopMedium ? 38 : 42"
                   :line-height=" isMobileSmall ? 32 : isMobile ? 38 : isDesktopMedium ? 42 : 46"
                   weight="600"
          >
            Преимущества
          </AppText>
        </div>
      </div>
      <div class="section__wrap">

        <BlockWrap count="3" offset-y="30" offset-x="30">

          <div class="advantages__item"
               v-for="(item, index) in advantages"
               :key="index"
          >
            <div class="advantages__item-inner">
              <div class="block__icon mb-30">
                <img :src="item.icon" alt="">
              </div>
              <AppText size="20" line-height="22" weight="600" class="mb-20"> {{ item.title }}</AppText>
              <AppText size="16" line-height="24" class="text-color">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Massa nibh nibh urna bibendum ante tellus
                nec
              </AppText>
            </div>

          </div>

        </BlockWrap>

      </div>
    </div>

  </section>
</template>


<script>
import BlockWrap from "./Shared-components/BlockWrap";

export default {
  name: "Advantages",
  components: {BlockWrap},
  data() {
    return {
      advantages: [
        {
          icon: "/assets/icons/team.svg",
          title: "Лучшие специалисты",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna bibendum ante tellus nec"
        },
        {
          icon: "/assets/icons/team.svg",
          title: "Современное оборудование",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna bibendum ante tellus nec"
        },
        {
          icon: "/assets/icons/team.svg",
          title: "Современная методика",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna bibendum ante tellus nec"
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.advantages {
  &__item {
    position: relative;
    padding: 30px;
    border-radius: 12px;
    background-color: white;
    overflow: hidden;
    transition: all .2s linear;

    &:hover {
      transform: scale(1.05);
    }

    &-inner {
      position: relative;
      z-index: 2;
      padding-right: 30px;
    }

    &:nth-child(1) {
      &::before {
        content: "1";
        right: -15px;
      }
    }

    &:nth-child(2) {
      &::before {
        content: "2";
      }
    }

    &:nth-child(3) {
      &::before {
        content: "3";
      }
    }

    &::before {
      position: absolute;
      font-family: Arial, sans-serif;
      font-weight: 600;
      font-size: 200px;
      line-height: 200px;
      bottom: -35px;
      right: -25px;
      color: #F3F9FF;
    }
  }
}

</style>
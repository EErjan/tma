<template>
  <div class="my-container">
    <section class="section">
      <div class="courses">
        <div class="courses__info">
          <AppText :size="isMobileMedium ? 24 : isDesktopMedium ? 32 : 40"
                   :line-height="isMobileMedium ? 32 : isDesktopMedium ? 38 :  46"
                   weight="600"
                   :class="isMobileMedium ? 'mb-20' : 'mb-40'"
          >Наши курсы
          </AppText>
          <AppText :size="isMobileMedium ? 14 : 16" line-height="26"
                   class="text-color"
                   :class="isMobileMedium ? 'mb-20' : 'mb-40'"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh nibh urna bibendum ante
            tellus nec egestas porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AppText>

          <AppButton theme="white">Подробнее</AppButton>
        </div>

        <div :class="`courses__item courses__item-${idx+1} `"
             v-for="(item, idx) in courses"
             :key="idx"
        >
          <div class="block__icon mb-30">
            <img :src="item.icon" alt="">
          </div>

          <AppText :size="isMobileMedium ? 14 : isDesktopSmall ? 16 : 18"
                   :line-height="isMobileMedium ? 16 : isDesktopSmall  ? 18 : 22"
                   weight="600"
                   max-lines="4" style="min-height: 66px;"
                   class="mb-25"
          >
            {{ item.title }}
          </AppText>

          <router-link :to="item.path" class="courses__item-link">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.3651 6.56003L10.3851 11.56C10.2251 11.72 10.0251 11.8 9.8251 11.8C9.6251 11.8 9.4251 11.72 9.2651 11.56C8.9451 11.24 8.9451 10.74 9.2651 10.42L12.8851 6.78003H1.2051C0.765102 6.78003 0.405102 6.42003 0.405102 5.98003C0.405102 5.54003 0.765102 5.18003 1.2051 5.18003H12.8851L9.2651 1.54004C8.9451 1.22004 8.9451 0.720034 9.2651 0.400034C9.5851 0.0800342 10.0851 0.0800342 10.4051 0.400034L15.3851 5.40003C15.6851 5.74003 15.6851 6.26003 15.3651 6.56003Z"
                  fill="#104798"/>
            </svg>
          </router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from "./Shared-components/AppButton";

export default {
  name: "Courses",
  components: {AppButton},
  data() {
    return {
      courses: [
        {
          title: "Диагностика и лечение детских болезней в первичной медико- санитарной помощи",
          path: "",
          icon: "/assets/icons/course.svg"
        },
        {
          title: "Серонегативный спонди-лоартрит: патогенез, клиника, современные диагностики и лечения",
          path: "",
          icon: "/assets/icons/course.svg"
        },
        {
          title: "Эндокринология",
          path: "",
          icon: "/assets/icons/course.svg"
        },
        {
          title: "Современные методы диагностики и лечения хирургической инфекции",
          path: "",
          icon: "/assets/icons/course.svg"
        },
        {
          title: "Современные методы диагностики и лечения хирургических осложнений",
          path: "",
          icon: "/assets/icons/course.svg"
        },
        {
          title: "Детская кардиоревматология",
          path: "",
          icon: "/assets/icons/course.svg"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.courses {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'courses__info courses__info q w' 'e r t y';

  &__info {
    position: relative;
    grid-area: courses__info;
    padding: 30px;
  }

  &__item {
    padding: 30px;
    min-height: 289px;
    transition: all .3s linear;

    &-1 {
      grid-area: q;
      background-color: var(--color-bg);
    }

    &-2 {
      grid-area: w;
    }

    &-3 {
      grid-area: e;
    }

    &-4 {
      grid-area: r;
      background-color: var(--color-bg);
    }

    &-5 {
      grid-area: t;
    }

    &-6 {
      grid-area: y;
      background-color: var(--color-bg);
    }


    &-link {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: white;
      transition: all .2s linear;

      svg path {
        transition: all .2s linear;
      }


      &:hover {
        background-color: var(--color-main);

        svg path {
          fill: white;
        }
      }
    }

    &:hover {
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.06);
    }


  }
}

@media (max-width: 1240px) {

  .courses {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'courses__info courses__info courses__info'
        'q w e'
        'r t y';

    &__item {

      padding: 20px;

      &:nth-child(even) {
        background-color: var(--color-bg);
      }

      &:nth-child(odd) {
        background-color: white;
      }
    }
  }

}

@media (max-width: 768px) {
  .courses {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    grid-template-areas:
        'courses__info courses__info'
        'q w'
        'e r'
        't y';

    &__item {
      background-color: var(--color-bg) !important;
      box-shadow: none !important;
    }

    &__info {
      padding: 0 15px 15px;
    }

  }
}

@media (max-width: 500px) {
  .courses {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    grid-template-areas:
        'courses__info'
        'q'
        'w'
        'e'
        'r'
        't'
        'y';

    &__item {
      background-color: var(--color-bg) !important;
      box-shadow: none !important;
    }

  }
}


</style>
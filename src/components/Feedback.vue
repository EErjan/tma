<template>
  <div class="my-container">
    <section class="section" style="padding-top: 0;">
      <AppSlider :list="feedback" :slide-count="1" :pagination="false" class="feedback">
        <template #default="{item}">
          <div class="feedback__item">
            <div class="feedback__item-left">
              <div class="feedback__item-top">
                <AppText
                    :size="isMobileSmall ? 28 : isMobile ? 34  : isDesktopMedium ? 38 : 42"
                    :line-height=" isMobileSmall ? 32 : isMobile ? 38 : isDesktopMedium ? 42 : 46"
                    weight="600"
                > Отзывы наших
                  студентов
                </AppText>
              </div>
              <div class="feedback__item-content">
                <AppText size="20" line-height="28" weight="600" class="mb-10"> {{ item.title }}</AppText>
                <AppText size="16" line-height="26" class="mb-20"> {{ item.subtitle }}</AppText>
                <AppText size="16" line-height="26" class="text-color mb-20"> {{ item.text }}</AppText>
              </div>
            </div>
            <div class="feedback__item-right">
              <div class="feedback__photo">
                <img :src="item.photo" alt="">
              </div>
            </div>
          </div>
        </template>

      </AppSlider>
    </section>
  </div>
</template>

<script>
import AppSlider from "./Shared-components/AppSlider";

export default {
  name: "Feedback",
  components: {AppSlider},
  data() {
    return {
      feedback: [
        {
          title: "Максим солодилов 1",
          subtitle: "Выпускник курса “Эндокринологии”",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nibh pellentesque pellentesque blandit diam libero. Arcu nullam neque adipisci montes, sapien. Vulputate sit hendrerit ut donec in pellentes placerat ultrices. Sodales cursus ipsum eu nec et consectetur ultrices. Semper pellentesque faucibus turpis faucibus interdum. ",
          photo: "/assets/img/feedback.jpg",
        },
        {
          title: "Максим солодилов 2",
          subtitle: "Выпускник курса “Эндокринологии”",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nibh pellentesque pellentesque blandit diam libero. Arcu nullam neque adipisci montes, sapien. Vulputate sit hendrerit ut donec in pellentes placerat ultrices. Sodales cursus ipsum eu nec et consectetur ultrices. Semper pellentesque faucibus turpis faucibus interdum. ",
          photo: "/assets/img/feedback.jpg",
        },
        {
          title: "Максим солодилов 3",
          subtitle: "Выпускник курса “Эндокринологии”",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nibh pellentesque pellentesque blandit diam libero. Arcu nullam neque adipisci montes, sapien. Vulputate sit hendrerit ut donec in pellentes placerat ultrices. Sodales cursus ipsum eu nec et consectetur ultrices. Semper pellentesque faucibus turpis faucibus interdum. ",
          photo: "/assets/img/feedback.jpg",
        },
        {
          title: "Максим солодилов 4",
          subtitle: "Выпускник курса “Эндокринологии”",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nibh pellentesque pellentesque blandit diam libero. Arcu nullam neque adipisci montes, sapien. Vulputate sit hendrerit ut donec in pellentes placerat ultrices. Sodales cursus ipsum eu nec et consectetur ultrices. Semper pellentesque faucibus turpis faucibus interdum. ",
          photo: "/assets/img/feedback.jpg",
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.feedback {
  &__item {
    display: flex;
    width: 100%;

    &-left {

    }

    &-top {
      padding-bottom: 60px;
      position: relative;
      min-height: 170px;
      margin-top: 20px;

      .text {
        max-width: 450px;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        right: -2px;
        z-index: 1;
        max-width: 167px;
        max-height: 167px;
        width: 100%;
        height: 100%;
        background-image: url("/assets/icons/pattern.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

    }

    &-content {
      background-color: var(--color-bg);
      padding: 30px;
      position: relative;
      z-index: 2;
    }

    &-right {
      max-width: 600px;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    &-photo {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .app-slider__button-next {
    bottom: 40px;
    top: unset !important;
    right: 37% !important;
  }

  .app-slider__button-previous {
    bottom: 40px;
    top: unset !important;
    right: 42% !important;
  }
}
</style>
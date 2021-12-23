<template>
  <section class="course-page section-padding">
    <div class="my-container">
      <div class="content">
        <div class="content__main">
          <div class="video-player-wrap mb-20">
            <img src="/assets/img/video-player.jpg" alt="" style="width: 100%; object-fit: contain">
            <!--            <video-player :options="videoOptions"-->
            <!--                          @player-state-changed="playerStateChanged"-->
            <!--                          ref="myPlayer"-->
            <!--                          style="width: 100%;object-fit: contain"/>-->
          </div>
          <div class="tab__main mb-30 ">
            <div class="section__top">
              <div class="section__top-left">
                <div class="tab px-10">
                  <button class="tab__item active">Dars haqida</button>
                  <button class="tab__item">Dars fayllari</button>
                </div>
              </div>
            </div>
            <div class="tab__body">
              <AppText size="14" line-height="20" weight="500" class="">
                Lorem ipsum dolor sit amet.
              </AppText>
            </div>
          </div>
          <comments/>
        </div>
        <div class="sidebar">
          <div class="course__accordion bordered radius">
            <AppText size="14" line-height="17" weight="700" class="pa-15 border-bottom">
              Course name
            </AppText>
            <AppDivider style="margin: 0"/>
            <Accordion>
              <AccordionItem class="m-15 bordered radius active">
                <template slot="accordion-trigger">
                  <div class="course__accordion-header">
                    <div class="course__accordion-numb" :class="isDesktopSmall ? 'mr-10' : 'mr-20'">
                      1
                    </div>
                    <h4 class="course__accordion-text">
                      An introduction to web development
                    </h4>
                  </div>
                </template>
                <template slot="accordion-content">
                  <div style="padding: 0 15px 15px">
                    <div class="course__accordion-item radius bordered pa-10 mb-10 active">
                      <div class="course__accordion-icon mr-20">
                        <svg width="16" height="16" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86602L1.5 13.0622C0.833332 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13397Z"
                              fill="#008AE4"/>
                        </svg>
                      </div>
                      <h4 class="course__accordion-text">
                        What Matters In This Section?
                      </h4>
                    </div>
                    <a href="#!" target="_blank" class="course__accordion-item mb-10 radius bordered pa-10">
                      <div class="course__accordion-icon mr-20">
                        <img src="/assets/icons/document.svg" alt="">
                      </div>
                      <h4 class="course__accordion-text">
                        What Matters In This Section?
                      </h4>
                    </a>
                  </div>
                </template>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import "/src/assets/styles/pages/detailed-page.scss"
// import {videoPlayer} from 'vue-vjs-hls';
import Comments from "../components/Shared-components/Comments";
import Accordion from "../components/Shared-components/Accordion";
import AccordionItem from "../components/Shared-components/AccordionItem";
import AppDivider from "../components/Shared-components/AppDivider";


export default {
  name: "index",
  components: {
    AppDivider,
    AccordionItem,
    Accordion,
    Comments,
    // videoPlayer
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

.course__accordion {

  .accordion__content {
    padding: 15px 30px 15px;
  }

  transition: .3s;

  .accordion {
    transition: .3s !important;
    height: 100%;

    &__item {
      &.active {
        background-color: #F5F9FD;

        .course__accordion-numb {
          background-color: white;
          border: 1px solid var(--color-border);
          font-size: 12px;
          font-weight: 700;
          font-family: "Gilroy", sans-serif;
        }
      }


      &.background_changed {
        background-color: #F5F9FD;
      }

      &:hover {
        background-color: #F5F9FD;
      }
    }

    .course__accordion-numb {
      font-weight: 700;
    }
  }

  &-header {
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &-wrap {
    padding: 15px 30px 15px 30px;
  }

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      min-width: 18px;
    }
  }

  &-numb {
    background-color: var(--color-border);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 24px;
    min-height: 24px;
    font-size: 12px;
    line-height: 14px;
  }

  &-item {
    display: flex;
    width: 100%;
    background: white;
    padding: 10px 20px;

    &.active {
      background-color: #0467a71c;
    }

    &:hover {
      background-color: #0467a71c;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

}

.tab__main {
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  width: 100%;

  .tab {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    //justify-content: center;

    &__item {
      padding: 20px 0;
      margin: 0 15px;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      cursor: pointer;
      background-color: transparent;

      &.active {
        border-bottom: 2px solid var(--color-main);
      }
    }

    &__body {
      padding: 0 20px 20px;
      border-top: 1px solid var(--color-border);
      padding-top: 30px;
    }
  }

  .app-slider {
    &__button {
      &-previous {
        left: -15px !important;
      }

      &-next {
        right: -15px !important;
      }
    }

  }
}

@media (max-width: 1140px) {

  .tab__main {
    .tab__item {
      font-size: 14px;
      padding: 10px 0;
    }
  }

  .section__top {
    padding: 10px;
    justify-content: center;
    text-align: center;

    .section__top-details {
      margin: auto;
      margin-bottom: 20px;
    }
  }

}

@media (max-width: 991px) {
  .course__accordion {
    &-header {
      padding: 10px 15px;
      align-items: center;
    }
  }

  .sidebar {
    max-width: 280px;
  }

  .content__main {
    max-width: calc(100% - 310px);
  }

  .course__accordion-text {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .tab__main {
    .tab__item {
      width: 100%;
    }
  }

  .section__top-details {
    margin-top: 20px !important;
  }
}

</style>

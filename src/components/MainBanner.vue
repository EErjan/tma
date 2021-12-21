<template>
  <section class="main__banner">
    <div class="my-container">
      <div class="main__banner-wrap mb-60">
        <div class="main__banner-content">
          <AppText size="66" weight="600" class="mb-30">Онлайн-платформа</AppText>
          <AppText size="20" line-height="28" class="text-color mb-30">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Orci viverra sapien
            tristique non et, urna,
            sapien sit tempus.
          </AppText>

          <AppButton theme="main">Подробнее</AppButton>
        </div>
        <div class="main__banner-photo">
          <div class="main__banner-photo-wrapper">
            <img src="/assets/img/banner-bg.png" class="main__banner-bg" alt="">
            <img src="/assets/img/banner-photo.png" class="main__banner-img" alt="">
          </div>
        </div>
      </div>

      <div class="main__banner-details">
        <BlockWrap count="4" class="align-start" offset-x="20" offset-y="20">
          <AppDropdown :list="courseName"
                       item-value="id"
                       item-name="title"
                       placeholder="Выберите курс"
          />
          <AppInput placeholder="Ваше имя" hide-details/>
          <AppInput placeholder="Введите E-mail" hide-details/>
          <AppButton theme="secondary" height="56">Ознакомиться с курсом</AppButton>
        </BlockWrap>
      </div>

    </div>


  </section>
</template>

<script>
import AppButton from "./Shared-components/AppButton";
import BlockWrap from "./Shared-components/BlockWrap";
import AppInput from "./Shared-components/AppInput";
import AppDropdown from "./Shared-components/AppDropdown";

export default {
  name: "MainBanner",
  components: {AppDropdown, AppInput, BlockWrap, AppButton},
  data() {
    return {
      courseName: [
        {
          title: "Lorem ipsum",
          id: "1"
        },
        {
          title: "Lorem ipsum",
          id: "2"
        },
        {
          title: "Lorem ipsum",
          id: "3"
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

.main__banner {
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-bg);

  &-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 540px;
  }

  &-content {
    max-width: 500px;
    width: 100%;
  }

  &-photo {
    width: calc(100% - 500px);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-wrapper {
      position: relative;
      max-width: 600px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &-bg {
      bottom: 0;
      z-index: 1;
      position: relative;
      max-width: 600px;
      max-height: 400px;
      height: 100%;
      width: 100%;
    }
  }


  &-img {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 30px;
    max-width: 360px;
    max-height: 540px;
    width: 100%;
  }

  &-details {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;

  }

}

@media (max-width: 1240px) {

}

</style>
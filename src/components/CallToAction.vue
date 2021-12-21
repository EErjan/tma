<template>
  <div class="cta">
    <div class="my-container">
      <div class="cta__wrap">
        <div class="cta__wrap-inner">
          <AppText size="30" line-height="46" weight="600" class="mb-30 text-white">
            Запишитесь на курс прямо сейчас
          </AppText>
          <div class="cta__buttons">
            <AppButton theme="white">Заполнить форму</AppButton>
            <AppButton theme="bordered-transparent">Позвонить</AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./Shared-components/AppButton";

export default {
  name: "CallToAction",
  components: {AppButton}
}
</script>

<style lang="scss" scoped>
.cta {
  width: 100%;
  position: relative;


  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: var(--color-bg);
  }


  &__wrap {
    position: relative;
    overflow: hidden;
    border-radius: 6px;


    &-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 252px;
      background-color: var(--color-main);
      z-index: 2;
      overflow: hidden;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 37px;
      background-image: url("/assets/icons/pattern-2.svg");
      background-repeat: no-repeat;
      max-width: 75px;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      background-image: url("/assets/icons/pattern-3.svg");
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;
      max-width: 130px;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

  }

  &__buttons {
    display: flex;
    grid-gap: 16px;
  }
}
</style>
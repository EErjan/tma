<template>
  <footer class="footer">
    <div class="my-container">
      <div class="footer__top">
        <div class="footer__top-info">
          <a href="#" class="footer__logo mr-20">
            <img src="/assets/icons/logo.svg" alt="logo">
          </a>

          <AppText size="20" line-height="26" weight="500">
            Toshkent tibbiyot akademiyasi huzuridagi pedagog kadrlarni
            qayta tayyorlash va ularning malakasini oshirish tarmoq markazi
          </AppText>

        </div>

        <div class="footer__top-contacts">
          <AppText size="16" line-height="20" weight="500" class="mb-5">
            <a href="mailto:onlineplatforma@info.uz">onlineplatforma@info.uz</a>
          </AppText>

          <AppText size="22" line-height="22" weight="600">
            <a href="tel:(97) 978 - 23 -67">(97) 978 - 23 -67</a>
          </AppText>

        </div>
      </div>

      <div class="footer__bottom">
        <AppText class="16" line-height="22">
          Mualliflik huquqi © 2021 Онлайн-платформаa
        </AppText>

        <div class="footer__socials">
          <a href="#!" class="footer__socials-item">
            <img src="/assets/icons/fb.svg" alt="">
          </a>
          <a href="#!" class="footer__socials-item">
            <img src="/assets/icons/ig.svg" alt="">
          </a>
          <a href="#!" class="footer__socials-item">
            <img src="/assets/icons/tg.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "TheFooter",
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-bg);

  &__top {
    padding: 60px 0 40px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    &-info {
      max-width: 720px;
      width: 100%;
      display: flex;
      align-items: center;
    }

    &-contacts {

    }

  }

  &__bottom {
    padding: 40px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  &__socials {
    margin-left: auto;

    &-item {
      margin: 10px 0 10px 24px
    }
  }

}
</style>
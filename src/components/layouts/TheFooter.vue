<template>
  <footer class="footer">
    <div class="my-container">
      <div class="footer__top">
        <div class="footer__top-info">
          <a href="#" class="footer__logo mr-20">
            <img src="/assets/icons/logo.svg" alt="logo">
          </a>

          <AppText :size="isMobileSmall ? 14 : isMobile ? 16 : 20"
                   :line-height="isMobile ? 22 : 26"
                   weight="500"
          >
            Toshkent tibbiyot akademiyasi huzuridagi pedagog kadrlarni
            qayta tayyorlash va ularning malakasini oshirish tarmoq markazi
          </AppText>

        </div>

        <div class="footer__top-contacts">
          <AppText :size="isMobile ? 14 : 16"
                   :line-height="isMobile ? 18 : 20"
                   weight="500"
                   class="mb-5"
          >
            <a href="mailto:onlineplatforma@info.uz">onlineplatforma@info.uz</a>
          </AppText>

          <AppText :size="isMobileSmall ? 14 : isMobile ? 18 : 22"
                   :line-height="isMobile ? 22 : 24"
                   weight="600">
            <a href="tel:(97) 978 - 23 -67">(97) 978 - 23 -67</a>
          </AppText>

        </div>
      </div>

      <div class="footer__bottom">
        <AppText size="16" line-height="22" class="footer__bottom-text">
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
    justify-content: space-between;
    align-items: center;

    &-info {
      max-width: 720px;
      width: 100%;
      display: flex;
      align-items: center;
      padding-right: 40px;
    }

    &-contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 200px;
      width: 100%;

      a {
        display: block;
      }

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

@media (max-width: 650px) {
  .footer__top {
    flex-wrap: wrap;
    padding: 40px 0 30px;

    &-info {
      margin-bottom: 20px;
      padding-right: 0;
    }

    &-contacts {
      justify-content: flex-start !important;
      align-items: flex-start !important;
      max-width: unset;
    }
  }

  .footer__bottom {
    padding: 30px 0 20px;
    justify-content: center;
    grid-gap: 20px;

    &-text {
      width: 100%!important;
      max-width: 100%!important;
    }

    flex-wrap: wrap;
  }

  .footer__socials {
    margin-right: auto;
  }
}

@media (max-width: 500px) {
  .footer__top-info {
   flex-direction: column;

    .footer__logo {
      margin-bottom: 20px;
    }

  }
}


</style>
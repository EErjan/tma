<template>
  <div class="my-container">
    <section class="section-padding">
      <div class="section__top"
           :class=" isDesktopSmall ? 'mb-30' : 'mb-60'"
      >

        <AppButton theme="main"
                   @click="$router.go(-1)"
                   style="display: flex; align-items: center"
        >

          <span class="mr-10">❮</span>

          Назад
        </AppButton>

        <div class="section__title text-center">
          <AppText :size="isMobileSmall ? 28 : isMobile ? 34  : isDesktopMedium ? 38 : 42"
                   :line-height=" isMobileSmall ? 32 : isMobile ? 38 : isDesktopMedium ? 42 : 46"
                   weight="600"
          >
            Название новости
          </AppText>
        </div>
      </div>
      <div class="section__wrap">

        <div class="news__inner-photo"
             :class="isMobileMedium ? 'mb-30' : 'mb-50'"
        >
          <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="">
        </div>

        <div class="content__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores dolorum eaque eligendi enim
            exercitationem, explicabo facere laborum modi officiis quibusdam quidem, reprehenderit repudiandae saepe
            ullam! Aliquid corporis deserunt dolorem, et excepturi illum iste iure laudantium, natus nemo nesciunt
            temporibus? Commodi inventore iure magnam quos repellat. Aliquid cupiditate deleniti dolore illum minima
            nemo sunt tempora unde velit veritatis. Accusamus adipisci asperiores corporis cum dolor error hic
            inventore, iusto minima odit quaerat quia quos repellendus reprehenderit totam. At, aut blanditiis esse eum
            ipsa magni nostrum quisquam quos, recusandae repudiandae saepe sint voluptates, voluptatum. A, aliquid animi
            aperiam at atque blanditiis consectetur consequatur delectus dicta dolor doloremque dolores eos excepturi
            expedita, fuga harum illum impedit incidunt ipsa ipsum laboriosam magni maiores minima neque non odio
            perspiciatis quaerat quam repudiandae similique soluta temporibus ut voluptatibus? Dolore doloribus fuga id
            nam pariatur quo velit. Accusantium ad aliquid amet at autem commodi consequatur consequuntur debitis dicta
            dolore exercitationem incidunt iste laborum, laudantium molestias nesciunt non placeat quidem quod
            repellendus saepe sed totam unde ut veniam voluptas voluptates? Accusantium adipisci aperiam architecto
            consectetur cupiditate deleniti dolore doloribus, dolorum fuga illum incidunt ipsa itaque, iusto libero
            natus omnis pariatur reprehenderit tempore ut voluptatum. Culpa dolor provident quibusdam?
          </p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import AppButton from "../components/Shared-components/AppButton";

export default {
  name: "NewsInner",
  components: {AppButton}
}
</script>

<style lang="scss" scoped>


.news {
  &__inner {
    &-top {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    &-wrap {
      max-width: 810px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    &-photo {
      width: 100%;
      max-height: 540px;
      height: 100%;
      overflow: hidden;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

}

.content__text {

  font-size: 16px;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  b {
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 15px;
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }

  strong {
    display: inline-flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 14px;;
    line-height: 1.3;

    &:first-child {
      margin-top: 0;
    }
  }

  ul {
    padding-left: 20px;
    margin-top: 24px;

    li {
      list-style-type: disc;
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 24px;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h5 {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

}
</style>
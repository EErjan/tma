<template>
  <div class="comments" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
    <AppText
        size="18"
        line-height="21"
        weight="700"
        class="mb-20"
    >
      Hozircha izohlar qoldirilmadi
    </AppText>
    <div class="bordered radius pa-20 mb-30">
                <textarea name="comment"
                          class="mb-10 comments__textarea"
                          placeholder="Izoh qoldiring..."
                          cols="10"
                          rows="4"
                ></textarea>
      <div class="d-flex justify-space-between align-center">
        <button class="upload__img mr-30" style="visibility: hidden">
          <img src="/assets/icons/img-upload.svg" alt="">
        </button>
        <AppButton
            theme="main"
            sides="50">
          Yuborish
        </AppButton>
      </div>
    </div>
    <div class="comments__wrap">
      <div class="comments__item">
        <div class="comments__item-main mb-20">
          <BlockWrap
              width-auto
              count="2"
              class="mb-10"
          >
            <div class="author__photo sm">
              <img
                  src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="">
            </div>

            <div class="author__content">
              <AppText
                  weight="700"
                  size="14"
                  line-height="20"
              >
                Moralbie
              </AppText>

              <AppText
                  weight="400"
                  size="12"
                  class="color-text"
                  line-height="16"
              >
                Today 12:00
              </AppText>

            </div>

          </BlockWrap>
          <AppText
              size="14"
              line-height="24"
              class="mb-10"
          >
            Acquire essential java basics for transitioning to the Spring Framework, Java EE, Android development?
          </AppText>
          <button class="d-flex align-center">
            <img src="/assets/icons/reply.svg" style="margin-right: 5px;" alt="">
            <AppText size="12" line-height="14" class="color-text reply_comment_button">
              Javob yozish
            </AppText>
          </button>
          <div class="bordered radius pa-20 mb-30" style="margin-top: 20px">
                <textarea name="comment"
                          class="mb-10 comments__textarea"
                          placeholder="Izoh qoldiring..."
                          cols="10"
                          rows="4"
                ></textarea>
            <div class="d-flex justify-space-between align-center">
              <button class="upload__img mr-30" style="visibility: hidden">
                <img src="/assets/icons/img-upload.svg" alt="">
              </button>
              <AppButton theme="main" sides="50">
                Yuborish
              </AppButton>
            </div>
          </div>
        </div>
        <comment-with-replies></comment-with-replies>
      </div>
    </div>
  </div>
</template>

<script>
import CommentWithReplies from "./CommentWithReplies";
import BlockWrap from "./BlockWrap";
import AppButton from "./AppButton";

export default {
  name: "Comments",
  components: {
    AppButton,
    CommentWithReplies,
    BlockWrap
  },
}
</script>

<style scoped>

</style>
<style>
.reply_comment_button:hover {
  color: #0099fe;
}
</style>

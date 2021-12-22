<template>
  <div>
    <div class="comments__item-replies">
      <BlockWrap
          width-auto
          offset-x="10"
          offset-y="10"
          class="align-center mb-10"
      >

        <div class="author__photo xs">
          <img
              src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="">
        </div>

        <div class="author__content">
          <AppText
              size="14"
              line-height="16"
          >
            Moralbie
          </AppText>
        </div>
        <div class="d-flex align-center"
        >
          <img src="/assets/icons/answered.svg"
               class="mr-5"
               alt="">
          <AppText
              size="12"
              line-height="16"
              weight="500"
              class="color-text"
          >
            Reply
          </AppText>


        </div>
        <AppText
            size="12"
            line-height="16"
            class="color-text"
        >
          Today 12:00
        </AppText>

      </BlockWrap>
      <AppText size="14" line-height="24" class="mb-10">
        Acquire essential java basics for transitioning to the Spring Framework, Java EE, Android development?
      </AppText>
      <button class="d-flex align-center mb-20">
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
<!--      <comment-with-replies></comment-with-replies>-->
    </div>
  </div>
</template>

<script>
import BlockWrap from "./BlockWrap";
import AppButton from "./AppButton";

export default {
  name: "CommentWithReplies",
  components: {AppButton, BlockWrap},
}
</script>

<style scoped>

</style>

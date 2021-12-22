<template>
  <div>
    <MainBanner id="banner"/>
    <Courses id="courses"/>
    <Advantages id="advantages"/>
    <News id="news"/>
    <Feedback id="feedback"/>
    <CallToAction id="cta"/>
  </div>
</template>

<script>
import MainBanner from "../components/MainBanner";
import Courses from "../components/Courses";
import Advantages from "../components/Advantages";
import News from "../components/News";
import Feedback from "../components/Feedback";
import CallToAction from "../components/CallToAction";

export default {
  name: "Main",
  components: {CallToAction, Feedback, News, Advantages, Courses, MainBanner},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <MainBanner/>
    <OurCourses/>
  </div>
</template>

<script>
import MainBanner from "../components/MainBanner";
import OurCourses from "../components/OurCourses";

export default {
  name: "Main",
  components: {OurCourses, MainBanner},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
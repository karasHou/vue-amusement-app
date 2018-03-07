<template>
<div class="book">
    <common-header bg="rgb(121, 85, 72)">
        <span slot="title">Book</span>
    </common-header>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
    <common-footer bg="rgb(121, 85, 72)"></common-footer>
</div>
</template>

<script>
import CommonHeader from "../common/Header";
import CommonFooter from "../common/Footer";
// 引入插件vue-swipe
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    CommonHeader,
    CommonFooter,
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

<style scoped>
.book {
  margin: 1rem 0;
}
.my-swipe {
  width: 100%;
  height: 500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url("https://img3.doubanio.com/lpic/s24468373.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  color: #fff;
}

.slide2 {
  background-image: url("https://img3.doubanio.com/lpic/s6989253.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  color: #000;
}

.slide3 {
  background-image: url("https://img3.doubanio.com/lpic/s27102925.jpg");
  background-clip: border-box;
  background-size: 100%;
  color: #fff;
}
</style>



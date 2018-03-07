<template>
  <ul class="list clearfix">
    <li v-for="(photo, index) in photoList" :key="index">
        <!-- 使用url传参 ，注意字符串拼接 -->
        <router-link :to="'/photo/photoDetail/'+index">
            <!-- 每一个img外面都有router=link -->
            <img :src="photo.src" alt="">
        </router-link>
    </li>
  </ul>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      photoList: []
    };
  },
  mounted() {
    // 返回一个promise对象
    Axios.get("/static/data/photodata.json")
      .then(res => {
        this.photoList = res.data.photoData;
        //将获取到的图片列表存到vuex
        this.$store.dispatch('setPhotoList', res.data.photoData);
      })
      // err表示错误信息
      .catch(err => {});
  }
};
</script>

<style scoped>
/* 解决元素塌陷引入common */
/* 注意在style中引入css要是用 @ */
@import url("../../assets/css/common.css");
.list {
  margin: 1rem 0;
}
.list li {
  width: 50%;
  float: left;
}
.list img {
  width: 100%;
}
</style>

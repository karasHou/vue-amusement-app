<template>
  <div class="header" :style="{background:bg}">
    <span class="home" @click="goHome">首页</span>
    <h2 class="title">
          <!-- 插槽 -->
          <slot name="title">默认值</slot>
    </h2>
  </div>
</template>

<script>
export default {
  methods: {
    //返回首页
    goHome() {
      this.$router.push("/");
    }
  },
  //监听父组件的参数
  props: ["bg"]
};
</script>

<style scoped>
.header {
  height: 1rem;
  background-color: rgb(33, 150, 243);
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.home {
  /* background: rgb(33, 150, 243); */
  border: none;
  color: #fff;
  margin-left: 0.2rem;
  text-decoration: none;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>

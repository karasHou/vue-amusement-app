<template>
  <div class="header">
    <button class="home">首页</button>
    <h2 class="title">Movie</h2>
  </div>
</template>

<script>
export default {};
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
  background: rgb(33, 150, 243);
  border: none;
  color: #fff;
  margin-left: 0.1rem;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>

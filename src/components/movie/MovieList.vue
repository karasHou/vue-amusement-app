<template>
<div class="movie-list">
  <ul>
    <li @click="goDetail(movie.id)" v-for="(movie,index) in movieList" :key="index" class="movie">
      <div class="movie-img">
          <!-- 注意src动态属性 -->
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-info">
          <p class="movie-name">{{movie.nm}}</p>
          <p>评分：{{movie.sc}}</p>
          <p>{{movie.ver}}</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
    </li>
  </ul>
  <!-- <div class="loading" v-show="loadingShow">
    <img src="../../assets/img/loading.gif" alt="">
  </div>
  <div class="tip" v-show="tip">
    <h4>人家是有底线的</h4>
  </div> -->
</div>
</template>

<script>
//导入的名字从package.json中去找
import Axios from "axios";
export default {
  //必须返回对象
  data() {
    return {
      movieList: [],
      loadingShow: true,
      tip: false,
      //缓存当前的获取值
      cache: []
    };
  },
  //钩子函数，模板编译挂载之后
  mounted() {
    //首次加载数据
    this.loadData();
    // 监听滚动条事件
    window.onscroll = () => {
      //可视区域（固定）
      let clientHeight = document.documentElement.clientHeight;
      //滚动条的高度（变化）
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //整个内容的高度（固定）
      let scrollHeight = document.documentElement.scrollHeight;
      //判断滚动到底
      if (clientHeight + scrollTop == scrollHeight) {
        console.log("到底了");
        //展示提示信息
        this.loadingShow = true;
        if (!this.tip) {
          this.loadData();
        } else {
          this.loadingShow = false;
        }
      }
    };
  },
  methods: {
    //加载数据
    loadData() {
      //请求前先判断
      if (this.movieList.length >= 20) {
        //到底的标志true
        this.tip = true;
        return;
      }

      let url =
        API_PROXY +
        "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
        this.movieList.length;
      Axios.get(url)
        .then(res => {
          //请求成功，进度条消失
          this.loadingShow = false;
          //每次请求后都连接到其后面
          this.cache = res.data.data.movies;
          this.movieList = this.movieList.concat(this.cache);
        })
        .catch(() => {});
    },
    goDetail(movieId) {
      console.log(movieId);
      //url传参
      this.$router.push("/movie/movieDetail/" + movieId);
    }
  }
};
</script>

<style scoped>
.movie-list {
  margin: 1rem 0;
}
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex-grow: 1;
  width: 0;
  margin-right: 0.2rem;
}
.movie-img img {
  width: 100%;
}
.movie-info {
  flex-grow: 2;
  /* 父元素中有内容，子元素设置宽度为0 */
  width: 0;
}
.movie-name {
  font-weight: bolder;
  margin-bottom: 0.1rem;
  font-size: 0.3rem;
}

.loading {
  text-align: center;
}
.tip {
  text-align: center;
  color: slategrey;
}
</style>

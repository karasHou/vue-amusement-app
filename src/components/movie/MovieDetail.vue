<template>
  <div class="detail">
        <div class="detail-content">
            <div class="detail-img">
                <img :src="detail.img" alt="">
            </div>
            <div class="detail-info">
                <h3 v-text="detail.nm"></h3>
                <p v-text="detail.sc+'分'"></p>
                <p>{{detail.cat}}</p>
                <p>{{detail.src}} / {{detail.dur}}分钟</p>
                <p>{{detail.rt}}</p>
            </div>
        </div>
        <hr>
        <div>
            <h3>主演</h3>
            <p>{{detail.star}}</p>
        </div>
        <hr>
        <div>
            <h3>简介</h3>
            <p v-html="detail.dra"></p>
        </div>
        <hr>
        <div>
          <h3>短评</h3>
          <ul>
            <li v-for="(comment,index) in comments" :key='index'>
              <div class="score">
                <span class="left">评分:{{comment.score}}</span>&nbsp;&nbsp;
                <span class="right">时间：{{comment.time}}</span>
              </div>
              <p class="comment-content">{{comment.content}}</p>
              <div class="user">
                <img v-if="isUserImg[index]"  :src="comment.avatarurl" alt="" class="img">
                <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2739950864,2040777343&fm=27&gp=0.jpg" alt="" class="img">
                <span class="nick">{{comment.nickName}}</span>
              </div>
              <hr>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      //详情
      detail: {},
      //评论
      comments: [],
      isUserImg: []
    };
  },
  mounted() {
    //请求电影详情
    let url1 =
      API_PROXY +
      "http://m.maoyan.com/movie/" +
      this.$route.params.movieId +
      ".json";
    //请求电影评论
    let url2 =
      API_PROXY +
      "http://m.maoyan.com/comments.json?movieid=" +
      this.$route.params.movieId;

    Axios.get(url1).then(res => {
      this.detail = res.data.data.MovieDetailModel;
    });

    Axios.get(url2).then(res => {
      this.comments = res.data.data.CommentResponseModel.cmts;
      // console.log(this.comments);

      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].avatarurl == "") {
          this.isUserImg[i] = false;
        } else {
          this.isUserImg[i] = true;
        }
      }
    });
  }
};
</script>

<style scoped>
.detail {
  margin: 1rem 0;
  padding: 0 0.2rem;
}
.detail-content {
  display: flex;
}
.detail-img {
  flex-grow: 1;
  width: 0;
  margin: 0.1rem;
}
.detail-info {
  flex-grow: 2;
  width: 0;
  margin-left: 0.2rem;
}
.detail h3 {
  font-weight: bolder;
  /* text-align: center; */
  /* margin-left: 0.1rem; */
}

.score{
  margin-top: .1rem;
  color: slategrey;
}

.comment-content {
  margin: 0.1rem 0;
  font-size: .25rem;
}

.user {
  height: 1rem;
  /* display: flex; */
  /* line-height: 1rem; */
}
.user .img {
  width: 0.6rem;
  border-radius: 50%;
}

.user .nick {
  vertical-align: bottom;
  color: slategrey;
}
</style>

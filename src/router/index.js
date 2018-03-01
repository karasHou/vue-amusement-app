import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Movie from "@/components/movie/Movie";
import MovieList from "@/components/movie/MovieList";
import MovieDetail from "@/components/movie/MovieDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 默认进入首页
      path: "/",
      redirect: '/movie/movieList',
    },
    {
      path: "/movie",
      component: Movie,
      // 配置子路由
      children: [
        {
          path: "movieList",
          component: MovieList
        },
        {
          path: "movieDetail",
          component: MovieDetail
        }
      ]
    }
  ]
});

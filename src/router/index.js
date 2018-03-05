import Vue from "vue";
import Router from "vue-router";
import Movie from "@/components/movie/Movie";
import MovieList from "@/components/movie/MovieList";
import MovieDetail from "@/components/movie/MovieDetail";
import Music from "@/components/music/Music";
import Book from "@/components/book/Book";
import Photo from "@/components/photo/Photo";
import PhotoList from "@/components/photo/PhotoList";
import PhotoDetail from "@/components/photo/PhotoDetail";
import MusicList from "@/components/music/MusicList";
import MusicAlbums from "@/components/music/MusicAlbums";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      // 默认进入首页
      path: "/",
      redirect: "/movie/movieList"
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
          // 配置url传参
          path: "movieDetail/:movieId",
          component: MovieDetail
        }
      ]
    },
    {
      path: "/music",
      component: Music,
      redirect: "/music/musicList",
      //配置子路由
      children: [
        {
          path: "musicList",
          component: MusicList
        },
        {
          //配置url传参
          path: "musicAlbums/:musicId",
          component: MusicAlbums
        }
      ]
    },
    {
      path: "/book",
      component: Book
    },
    {
      path: "/photo",
      component: Photo,
      redirect: '/photo/photoList',
      children: [
        {
          path: "photoDetail",
          component: PhotoDetail
        },
        {
          path: "photoList",
          component: PhotoList
        }
      ]
    }
  ]
});

## vue-app

一个使用真实数据制作的包含电影热映，音乐播放，图片展示的综合app，使用vue-cli以及一些常用插件开发。

![](https://github.com/Houweix/vue-app/raw/master/show/show.gif)
[在线预览(请使用移动端)](http://www.ihouwei.com/vueapp)

## 开发背景
>vue-cli，一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

通过本次的app开发，可以更好地学习vue以及vue-cli全家桶，该app中不仅使用了vue的基本语法，如组件，插件的配置，还有vuex状态管理和webpack配置等，是一个综合性很强的例子。

## 系统环境
* vue: 2.5.2
* vuex: 3.0.1
* webpack: 3.6.0

* 软件：vs code

## 界面 & 功能
### 首页（电影列表）
使用Axios，通过从豆瓣API获取的热映电影的相关数据，可以点击喜欢的电影查看详情
![首页](https://github.com/Houweix/vue-app/raw/master/show/movie.png)

### 音乐
使用插件vue-aplayer,点击进入音乐播放器可以播放音乐以及歌词的展示。
![音乐](https://github.com/Houweix/vue-app/raw/master/show/music.png)

### 书籍
轮播图循环展示三本书，使用插件vue-swipe。
![音乐](https://github.com/Houweix/vue-app/raw/master/show/book.png)

### 图片
使用插件v-touch来管理移动端的触摸事件。左右滑动可以切换图片。
![图片](https://github.com/Houweix/vue-app/raw/master/show/Photo.png)

## 相关要点
### Vuex
>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

引入vuex状态管理，将共享的数据放在vuex中。在main.js中配置，全部其他的组件都可以使用。
#### 数据的存储
```javascript
this.$store.dispatch('setPhotoList', res.data.photoData);
```
#### 数据的读取
```javascript
this.$store.state.photoList[this.nowIndex].src
```
### vue父子组件通信
>在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。
#### 父->子
父组件向子组件发送**bg**
```javascript
<common-header bg="rgb(0, 150, 136)">
        <span slot="title">Music</span>
</common-header>
```
子组件显式的声明需要的数据**bg**
```javascript
export default {
  props: ["bg"]
}
```

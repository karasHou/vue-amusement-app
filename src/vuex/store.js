import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//状态
const state = {
  photoList: []
};

const mutations = {
  setPhotoList(state, status) {
    //将传入的数据存入photoList中
    state.photoList = status;
  }
};

//计算属性
const getters = {};

//通过action调用mutation，可以在执行方法之前执行一些操作
const actions = {
  setPhotoList({ commit }, status) {
    commit("setPhotoList", status);
  }
};

export default new Vuex.Store({
  // 对象简洁形式
  state,
  getters,
  mutations,
  actions
});

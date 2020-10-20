import Vue from "vue";
import Vuex from "vuex";
import todo from "./module/Todo";
// import axios from 'ax'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo
  }
});

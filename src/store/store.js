import Vue from "vue";
import Vuex from "vuex";
import checks from "./checks";
import connectApi from "./connectApi";
import gamePlay from "./gamePlay";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { checks, connectApi, gamePlay }
});

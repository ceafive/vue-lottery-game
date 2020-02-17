import axios from "axios";

const state = () => {
  return {
    token: null,
    enterMessage: ""
  };
};

const mutations = {
  //REGISTER NEW USER
  REGISTER_USER: (state, res) => {
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("jwt", res.data.token);
    state.enterMessage = "";
  },

  //LOGIN USER
  LOGIN_USER: (state, res) => {
    // console.log(res);
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("jwt", res.data.token);
    state.enterMessage = "";
  },

  //LOGOUT USER
  LOGOUT_USER: () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("jwt");
  }
};

const actions = {
  //REGISTER NEW USER
  registerUser: async ({ commit, state }, newData) => {
    state.enterMessage = "Registering....";
    await axios
      .post(`${process.env.VUE_APP_API_URL}/register`, newData)
      .then(res => {
        commit("REGISTER_USER", res);
      });
  },

  //LOGIN USER
  loginUser: async ({ commit, state }, newData) => {
    state.enterMessage = "Logging In....";
    await axios
      .post(`${process.env.VUE_APP_API_URL}/login`, newData)
      .then(res => {
        commit("LOGIN_USER", res);
      });
  },

  //LOGOUT USER
  logout: ({ dispatch, commit }) => {
    commit("LOGOUT_USER")
    dispatch("authCheck");
  }
};

const getters = {
  token: state => {
    return state.token;
  },
  enterMessage: state => {
    return state.enterMessage;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

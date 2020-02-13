import axios from "axios";

const state = () => {
  return {
    token: null
  };
};

const mutations = {
  //REGISTER NEW USER
  REGISTER_USER: async (state, res) => {
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("jwt", res.data.token);
  },

  //LOGIN USER
  LOGIN_USER: async (state, res) => {
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("jwt", res.data.token);
  }
};

const actions = {
  //REGISTER NEW USER
  registerUser: async ({ commit }, newData) => {
    await axios
      .post(`${process.env.VUE_APP_BASE_URL}/register`, newData)
      .then(res => {
        commit("REGISTER_USER", res);
      });
  },

  //LOGIN USER
  loginUser: async ({ commit }, newData) => {
    await axios
      .post(`${process.env.VUE_APP_BASE_URL}/login`, newData)
      .then(res => {
        commit("LOGIN_USER", res);
      });
  },

  //LOGOUT USER
  logout: ({ dispatch }) => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("jwt");
    dispatch("authCheck");
  }
};

const getters = {
  token: state => {
    return state.token;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

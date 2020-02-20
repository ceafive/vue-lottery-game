import axios from "axios";

const state = () => {
  return {
    token: null,
    enterMessage: "",
    error: "Please enter username and password"
  };
};

const mutations = {
  //REGISTER/LOGIN NEW USER
  SIGN_USER: (state, res) => {
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
  //SIGN USER
  signUser: async ({ commit, state }, newData) => {
    let action = "";
    if (newData.action === "login") {
      action = "login";
      state.enterMessage = "Logging In..";
    } else {
      action = "register";
      state.enterMessage = "Registering..";
    }
    return await axios
      .post(`/${action}`, newData.user)
      .then(res => {
        commit("SIGN_USER", res);
      });
  },

  //LOGOUT USER
  logout: ({ dispatch, commit }) => {
    commit("LOGOUT_USER");
    dispatch("authCheck");
  }
};

const getters = {
  token: state => {
    return state.token;
  },
  enterMessage: state => {
    return state.enterMessage;
  },
  error: state => {
    return state.error;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

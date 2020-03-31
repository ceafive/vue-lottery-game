import axios from "axios";

const state = () => {
  return {
    token: null,
    enter: { login: "Login", register: "Register" },
    error: "Please enter username and password"
  };
};

const mutations = {
  //REGISTER/LOGIN NEW USER
  SIGN_USER: (state, res) => {
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("jwt", res.data.token);
  },
  //HANDLE LOGIN/SIGN UP ERRORS
  ERROR_HANDLING: (state, error) => {
    if (error === "Unauthorized" || error === "Bad Request")
      state.error = "Username or password invalid";
    if (error.name === "UserExistsError") state.error = error.message;
  },
  //LOGOUT USER
  LOGOUT_USER: () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("jwt");
  }
};

const actions = {
  //AUTHENTICATE USER
  authenticateUser: async ({ commit }, { user, action }) => {
    try {
      const res = await axios.post(`/${action}`, user);
      await commit("SIGN_USER", res);
      await commit("AUTH_CHECK");
    } catch (err) {
      const error = err.response.data;
      commit("ERROR_HANDLING", error);
    }
  },
  //LOGOUT USER
  logout: ({ commit }) => {
    commit("LOGOUT_USER");
    commit("AUTH_CHECK");
  }
};

const getters = {
  token: state => {
    return state.token;
  },
  enter: state => {
    return state.enter;
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

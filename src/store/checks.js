const state = () => {
  return {
    isLoggedIn: false,
    userDetails: ""
  };
};

const mutations = {
  AUTH_CHECK: state => {
    state.token = sessionStorage.getItem("jwt");
    if (state.token != null || state.token != undefined) {
      state.isLoggedIn = true;
      state.userDetails = JSON.parse(sessionStorage.getItem("user"));
      return;
    }
    state.isLoggedIn = false;
    state.userDetails = "";
  }
};

const actions = {
  authCheck: ({ commit }) => {
    commit("AUTH_CHECK");
  }
};

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn;
  },
  userDetails: state => {
    return state.userDetails;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

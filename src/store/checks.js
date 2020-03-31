const state = () => {
  return {
    isLoggedIn: false,
    userDetails: ""
  };
};

const mutations = {
  AUTH_CHECK: state => {
    state.token = sessionStorage.getItem("jwt");
    if (state.token) {
      state.isLoggedIn = true;
      state.userDetails = JSON.parse(sessionStorage.getItem("user"));
    } else {
      state.isLoggedIn = false;
      state.userDetails = "";
    }
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
  mutations,
  getters
};

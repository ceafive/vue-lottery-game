const state = () => {
  return {
    errorMessage: "",
    bannerMessage: "",
    singleGameArray: []
  };
};

const mutations = {
  INIT_ARRAY: state => {
    //SET RETURNED ARRAY TO NEVER BE EQUAL TO NULL
    const storedArray = JSON.parse(localStorage.getItem("betSlip"));
    if (storedArray == null) {
      state.singleGameArray = [];
    } else {
      state.singleGameArray = storedArray;
    }
  },
  SELECT_NUMBER: (state, number) => {
    //IF ARRAY LENGTH IS GREATER THAN 5
    if (state.singleGameArray.length >= 5) {
      state.errorMessage = "You have selected 5 numbers, play now";
    }
    //IF ARRAY LENGTH IS LESS THAN 5
    else {
      //CHECK IF PICK ALREADY EXISTS IN ARRAY
      const index = state.singleGameArray.indexOf(number);
      if (typeof state.singleGameArray[index] == "undefined") {
        // NUMBER DOES NOT EXIST
        state.errorMessage = "";
        //INSERT NUMBER INTO ARRAY
        let newArray = state.singleGameArray;
        newArray.push(number);
        //STRINGIFY ARRAY AND SEND TO LOCAL STORAGE
        let betSlip = newArray;
        localStorage.setItem("betSlip", JSON.stringify(betSlip));
        const storedArray = JSON.parse(localStorage.getItem("betSlip"));
        state.singleGameArray = storedArray;
      } else {
        // NUMBER DOES EXIST
        state.errorMessage = "You have already selected the number";
      }
    }
  },
  REMOVE_NUMBER: (state, pick) => {
    const index = state.singleGameArray.indexOf(pick);
    state.singleGameArray.splice(index, 1);
    if (state.singleGameArray.length < 5) {
      state.errorMessage = "";
    }
    let betSlip = state.singleGameArray;
    localStorage.removeItem("betSlip");
    localStorage.setItem("betSlip", JSON.stringify(betSlip));
  },
  PLAY_GAME: state => {
    if (state.singleGameArray.length < 5) {
      return (state.errorMessage = "Select 5 numbers");
    }
    state.errorMessage = "";
    state.bannerMessage = "NOT YET CONFIGURED";
  },
  CLEAR: state => {
    localStorage.removeItem("betSlip");
    state.singleGameArray = [];
    state.errorMessage = "";
    state.bannerMessage = "";
  }
};

const actions = {
  initArray: ({ commit }) => {
    commit("INIT_ARRAY");
  },
  selectNumber: ({ commit }, number) => {
    commit("SELECT_NUMBER", number);
  },
  removeNumber: ({ commit }, pick) => {
    commit("REMOVE_NUMBER", pick);
  },
  playGame: ({ commit }) => {
    commit("PLAY_GAME");
  },
  clear: ({ commit }) => {
    commit("CLEAR");
  }
};

const getters = {
  errorMessage: state => {
    return state.errorMessage;
  },
  bannerMessage: state => {
    return state.bannerMessage;
  },
  singleGameArray: state => {
    return state.singleGameArray;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

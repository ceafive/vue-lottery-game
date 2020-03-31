const state = () => {
  return {
    errorMessage: "",
    bannerMessage: "",
    picks: []
  };
};

const mutations = {
  INIT_ARRAY: state => {
    //SET RETURNED ARRAY TO NEVER BE EQUAL TO NULL
    const storedArray = JSON.parse(localStorage.getItem("betSlip"));
    if (storedArray == null) {
      state.picks = [];
    } else {
      state.picks = storedArray;
    }
  },
  SELECT_NUMBER: (state, number) => {
    //IF ARRAY LENGTH IS GREATER THAN 5
    if (state.picks.length >= 5) {
      state.errorMessage = "You have selected 5 numbers, play now";
    }
    //IF ARRAY LENGTH IS LESS THAN 5
    else {
      //CHECK IF PICK ALREADY EXISTS IN ARRAY
      const index = state.picks.indexOf(number);
      if (typeof state.picks[index] == "undefined") {
        // NUMBER DOES NOT EXIST
        state.errorMessage = "";
        //INSERT NUMBER INTO ARRAY
        let newArray = state.picks;
        newArray.push(number);
        //STRINGIFY ARRAY AND SEND TO LOCAL STORAGE
        let betSlip = newArray;
        localStorage.setItem("betSlip", JSON.stringify(betSlip));
      } else {
        // NUMBER DOES EXIST
        state.errorMessage = "You have already selected the number";
      }
    }
  },
  REMOVE_NUMBER: (state, pick) => {
    const index = state.picks.indexOf(pick);
    state.picks.splice(index, 1);
    if (state.picks.length < 5) {
      state.errorMessage = "";
    }
    let betSlip = state.picks;
    localStorage.removeItem("betSlip");
    localStorage.setItem("betSlip", JSON.stringify(betSlip));
  },
  PLAY_GAME: state => {
    if (state.picks.length < 5) {
      return (state.errorMessage = "Select 5 numbers");
    }
    state.errorMessage = "";
    state.bannerMessage = "NOT YET CONFIGURED";
  },
  CLEAR: state => {
    localStorage.removeItem("betSlip");
    state.picks = [];
    state.errorMessage = "";
    state.bannerMessage = "";
  }
};

const getters = {
  errorMessage: state => {
    return state.errorMessage;
  },
  bannerMessage: state => {
    return state.bannerMessage;
  },
  picks: state => {
    return state.picks;
  }
};

export default {
  state,
  mutations,
  getters
};

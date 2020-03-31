<template>
  <div>
    <h1
      v-if="bannerMessage.length != 0"
      class="bg-red-100 border border-red-400 text-red-700 text-center text-4xl p-1"
    >
      {{ bannerMessage }}
    </h1>
    <div class="flex flex-wrap my-8">
      <div class="w-2/3 h-full bg-blue-700 p-12 my-32">
        <div
          v-if="errorMessage.length != 0"
          class="bg-red-100 border border-red-400 text-red-700 text-center p-1"
          role="alert"
        >
          <strong class="font-bold text-center">{{ errorMessage }}</strong>
        </div>

        <h1 class="text-2xl text-white">Select 5 random numbers:</h1>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(number, index) in 90"
            :key="index"
            class="flex flex-initial m-1"
          >
            <div class="w-8 h-8 rounded-full">
              <button
                @click="SELECT_NUMBER(number)"
                class="bg-white hover:bg-red-600 hover:text-white font-bold py-1 px-2 rounded-full focus:outline-none"
              >
                {{ number }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 h-full bg-white px-12">
        <h1 class="text-2xl font-medium">Your Picks for today</h1>
        <p>Game no: {{ Math.floor(Math.random() * 1000) }}</p>
        <div v-if="picks.length > 0" class="bg-gray-300 p-6">
          <div class="flex flex-wrap my-2 border-t border-gray-400">
            <div
              v-for="(pick, index) in picks"
              :key="index"
              class="w-full flex flex-wrap items-center px-4 py-2 mb-1 border-b border-gray-400"
            >
              <div
                class="w-full flex justify-between items-center font-hairline mb-2"
              >
                <div>
                  <span>Pick No. {{ index + 1 }}</span>
                </div>
                <div>
                  <span
                    @click="REMOVE_NUMBER(pick)"
                    class="text-red-500 font-semibold cursor-pointer"
                    >X</span
                  >
                </div>
              </div>
              <div class="w-full flex justify-between items-center">
                <div>
                  <span>Selected Number:</span>
                </div>
                <div>
                  <button class="bg-transparent focus:outline-none cursor-text">
                    <span class="text-xl text-green-500 font-black">
                      {{ pick }}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              @click="playGame"
              class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 mr-2 border border-green-500 hover:border-transparent focus:outline-none"
            >
              Play
            </button>
            <button
              @click="CLEAR()"
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent focus:outline-none"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  computed: mapGetters([
    "picks",
    "errorMessage",
    "isLoggedIn",
    "bannerMessage"
  ]),
  methods: {
    ...mapMutations(["SELECT_NUMBER", "REMOVE_NUMBER", "PLAY_GAME", "CLEAR"]),
    playGame() {
      if (!this.isLoggedIn) return this.$router.push("/login");
      this.PLAY_GAME();
    }
  }
};
</script>

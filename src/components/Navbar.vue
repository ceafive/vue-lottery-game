<template>
  <div id="nav" class="flex justify-between py-10">
    <div>
      <ul class="flex">
        <li class="mr-6">
          <router-link to="/">Home</router-link>
        </li>
        <!-- <li class="mr-6">
          <router-link to="/form">Form</router-link>
        </li>-->
      </ul>
    </div>
    <div class="flex justify-between items-center">
      <ul class="flex">
        <li :class="{ 'mr-6': !isLoggedIn }">
          <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        </li>
        <li :class="{ 'mr-6': !isLoggedIn }">
          <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
        </li>
        <li :class="{ 'mr-6': isLoggedIn }">
          <button v-if="isLoggedIn" @click="logout" class="focus:outline-none">Logout</button>
        </li>
      </ul>
      <p v-if="userDetails" class="text-gray-700 text-xs">
        Logged in as:
        <span class="text-black font-black ml-1 p-1">{{userDetails}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userDetails() {
      const userDetails = this.$store.getters.userDetails;
      const username = userDetails.username;
      return username;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      if (this.$route.path != "/") {
        return this.$router.push("/");
      }
    }
  }
};
</script>


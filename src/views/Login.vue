<template>
  <div>
    <TheLoginRegister
      :error="error"
      :noError="noError"
      :user="user"
      :submit="login"
      :enter="enter"
    />
  </div>
</template>

<script>
import TheLoginRegister from "@/components/TheLoginRegister";
export default {
  name: "Login",
  components: {
    TheLoginRegister
  },
  data() {
    return {
      error: {
        message: "Please enter username and password"
      },
      user: {
        username: "",
        password: ""
      },
      enterMessage: "Login"
    };
  },
  computed: {
    noError() {
      if (
        this.user.username.length >= 4 &&
        this.user.password.length >= 4 &&
        this.error.message == "Please enter username and password"
      ) {
        return true;
      }
      return false;
    },
    enter() {
      if (this.$store.getters.enterMessage !== "") {
        return this.$store.getters.enterMessage;
      } else {
        return this.enterMessage;
      }
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("loginUser", this.user)
        .then(() => {
          this.$store.dispatch("authCheck");
          if (this.$store.getters.isLoggedIn) {
            this.$router.push("/");
          } else {
            this.$router.push("/login");
          }
        })
        .then(() => {
          this.user.username = "";
          this.user.password = "";
        })
        .catch(err => {
          if (
            err.response.data == "Unauthorized" ||
            err.response.data == "Bad Request"
          ) {
            this.error.message = "Username or password not valid";
          }
        });
    }
  }
};
</script>

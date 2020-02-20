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
      error: this.$store.getters.error,
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
        this.error === "Please enter username and password"
      ) {
        return true;
      }
      return false;
    },
    enter() {
      if (
        this.$store.getters.enterMessage !== "" &&
        this.error === "Please enter username and password"
      ) {
        return this.$store.getters.enterMessage;
      } else if (this.error === "Username or password not valid") {
        return this.enterMessage;
      }
      return this.enterMessage;
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("signUser", { user: this.user, action: "login" })
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
            this.error = "Username or password not valid";
          }
        });
    }
  }
};
</script>

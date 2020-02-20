<template>
  <div>
    <TheLoginRegister
      :error="error"
      :noError="noError"
      :user="newUser"
      :submit="register"
      :enter="enter"
    />
  </div>
</template>

<script>
import TheLoginRegister from "@/components/TheLoginRegister";
export default {
  name: "Register",
  components: {
    TheLoginRegister
  },
  data() {
    return {
      error: "Please enter username and password",
      newUser: {
        username: "",
        password: ""
      },
      enterMessage: "Register"
    };
  },
  computed: {
    noError() {
      if (
        this.newUser.username.length >= 4 &&
        this.newUser.password.length >= 4 &&
        this.error == "Please enter username and password"
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
      } else if (this.error !== "Please enter username and password") {
        return this.enterMessage;
      }
      return this.enterMessage;
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch("signUser", { user: this.newUser, action: "register" })
        .then(() => {
          this.enterMessage = "Registering...";
          this.$store.dispatch("authCheck");
          if (this.$store.getters.isLoggedIn) {
            this.$router.push("/");
          } else {
            this.$router.push("/register");
          }
        })
        .then(() => {
          this.newUser.username = "";
          this.newUser.password = "";
        })
        .catch(err => {
          this.error = err.response.data.message;
        });
    }
  }
};
</script>

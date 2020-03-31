<template>
  <div>
    <TheLoginRegister
      :error="error"
      :noError="noError"
      :user="newUser"
      :submit="register"
      :enter="enter.register"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheLoginRegister from "@/components/TheLoginRegister";
export default {
  name: "Login",
  components: {
    TheLoginRegister
  },
  data() {
    return {
      newUser: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "error", "enter"]),
    noError() {
      if (
        this.newUser.username.length >= 4 &&
        this.newUser.password.length >= 4
      )
        return true;
      return false;
    }
  },
  methods: {
    ...mapActions(["authenticateUser"]),
    async register() {
      await this.authenticateUser({
        user: this.newUser,
        action: "register"
      });
      this.newUser.username = "";
      this.newUser.password = "";
      if (this.isLoggedIn) this.$router.push("/");
    }
  }
};
</script>

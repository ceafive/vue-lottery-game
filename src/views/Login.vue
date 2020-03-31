<template>
  <div>
    <TheLoginRegister
      :error="error"
      :noError="noError"
      :user="user"
      :submit="login"
      :enter="enter.login"
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
      user: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "error", "enter"]),
    noError() {
      if (this.user.username.length >= 4 && this.user.password.length >= 4)
        return true;
      return false;
    }
  },
  methods: {
    ...mapActions(["authenticateUser"]),
    async login() {
      await this.authenticateUser({
        user: this.user,
        action: "login"
      });
      this.user.username = "";
      this.user.password = "";
      if (this.isLoggedIn) this.$router.push("/");
    }
  }
};
</script>

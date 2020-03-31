<template>
  <div id="app" class="container mx-auto font-body h-screen">
    <TheNavbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "App",
  components: {
    TheNavbar
  },

  mounted() {
    this.$store.commit("AUTH_CHECK");
    this.$store.commit("INIT_ARRAY");
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>

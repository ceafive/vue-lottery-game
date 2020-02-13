<template>
  <div id="app" class="container mx-auto font-body h-screen">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },

  mounted() {
    this.$store.dispatch("authCheck");
    this.$store.dispatch("initArray");
  }
};
</script>

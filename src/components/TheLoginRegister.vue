<template>
  <div class="w-full max-w-xs m-auto">
    <div class="flex justify-around">
      <router-link to="/login">
        <h1 class="text-xl text-center">LOGIN</h1>
      </router-link>
      <router-link to="/register">
        <h1 class="text-xl text-center">REGISTER</h1>
      </router-link>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="login-username">Username</label>
        <input
          v-model="user.username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="login-username"
          type="text"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="login-password">Password</label>
        <input
          v-model="user.password"
          :class="{'border-red-500': !noError}"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="login-password"
          type="password"
          placeholder="******************"
          required
        />
        <p v-show="!noError" class="text-red-500 text-xs text-center italic">{{ error.message }}</p>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none"
          type="button"
        >{{enter}}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["user", "noError", "submit", "error", "enter"]
};
</script>
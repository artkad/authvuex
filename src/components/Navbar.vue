<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="brand-logo">Contact manager</router-link>
        <ul class="right">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{ currentUser }}</span>
          </li>
          <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {},
  methods: {
    logout: function() {}
  }
};
</script>

<style>
.email {
  padding-right: 10px;
}
@media screen and (max-width: 420px) {
  nav {
    height: 110px;
  }
}
</style>

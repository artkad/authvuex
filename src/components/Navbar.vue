<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="brand-logo left"
          >Contact manager</router-link
        >
        <ul class="right">
          <li v-if="isLogged"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!isLogged">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLogged">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLogged">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store";
export default {
  name: "navbar",
  computed: mapGetters(["isLogged"]),
  methods: {
    ...mapActions(["toggleIsLogged"]),
    logout: function() {
      if (store.getters.isLogged) {
        this.toggleIsLogged();
        this.$router.push("login");
      }
    }
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

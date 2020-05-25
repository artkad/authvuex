<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel blue white-text center">
            <h3>Login</h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email" />
                <label class="white-text" for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password" />
                <label class="white-text" for="password">Password</label>
              </div>
              <button
                v-on:click.prevent="login"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["checkLoginPassword", "toggleIsLogged"]),
    login() {
      const logPas = {
        email: this.email,
        password: this.password,
        base: "users"
      };
      this.checkLoginPassword(logPas).then(data => {
        if (data === true) {
          this.toggleIsLogged();
          this.$router.push("/");
        } else {
          alert("wrong login");
        }
      });
    }
  }
};
</script>

<template>
  <div id="app">
    <div class="contact" v-for="contact in allContacts" :key="contact.id">
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.email }}</p>
      <li>{{ contact.dev }}</li>
      <li>{{ contact.position }}</li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  // computed: {
  //   allContacts() {
  //     return this.$store.getters.allContacts;
  //   }
  // }
  computed: mapGetters(["allContacts"]),
  methods: mapActions(["fetchContacts"]),
  async mounted() {
    this.fetchContacts(2);
    // this.$store.dispatch("fetchContacts");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.contact {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>

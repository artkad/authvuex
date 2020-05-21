<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <ul class="collection with-header">
      <li class="collection-header"><h4>Contacts</h4></li>
      <li
        v-for="contact in allContacts"
        v-bind:key="contact.id"
        class="collection-item"
      >
        <div class="chip">{{ contact.department }}</div>
        {{ contact.id }}:{{ contact.name }}
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-contact',
            params: { id: contact.id }
          }"
        >
          <i class="fa fa-edit"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "dashboard",
  computed: mapGetters(["allContacts"]),
  methods: mapActions(["fetchContacts"]),
  async mounted() {
    this.fetchContacts();
  }
};
</script>

<template>
  <div id="view-contact">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">Contact ID#:{{ id }}</li>
      <li class="collection-item">Department: {{ department }}</li>
      <li class="collection-item">Position: {{ position }}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button v-on:click="deleteContact" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{ name: 'edit-contact', params: { id: this.id } }"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "view-contact",
  data() {
    return {
      id: null,
      name: null,
      department: null,
      position: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchSelectedContact(to.params.id).then(
        data => (
          (vm.id = data.id),
          (vm.name = data.name),
          (vm.department = data.department),
          (vm.position = data.position)
        )
      );
    });
  },
  // watch: {
  //   $route: "fetchContacts" // !!!!!!!
  // },
  methods: {
    ...mapActions(["fetchContacts", "fetchSelectedContact", "removeContact"]),
    deleteContact() {
      this.removeContact(this.id);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

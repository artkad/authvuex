<template>
  <div id="edit-contact">
    <h3>Edit Contact</h3>
    <div class="row">
      <form v-on:submit.prevent="updateContact" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="id" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="department" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "edit-contact",
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
  methods: {
    ...mapActions(["fetchSelectedContact", "editContact"]),
    updateContact() {
      const editedContact = {
        id: this.id,
        name: this.name,
        department: this.department,
        position: this.position
      };
      this.editContact(editedContact);
      this.$router.push({ name: "view-contact", params: { id: this.id } });
    }
  }
};
</script>

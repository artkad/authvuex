<template>
  <div id="new-contact">
    <h3>New Contact</h3>
    <div class="row">
      <form @submit.prevent="saveContact" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="id" required />
            <label>Contact ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="department" required />
            <label>Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
            <label>Position</label>
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
  name: "new-contact",
  data() {
    return {
      id: null,
      name: null,
      department: null,
      position: null
    };
  },
  methods: {
    ...mapActions(["addContact"]),
    saveContact() {
      const newContact = {
        id: this.id,
        name: this.name,
        department: this.department,
        position: this.position,
        base: "contacts"
      };
      this.addContact(newContact);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style></style>

const API = "http://127.0.0.1:3000/contacts/";
export default {
  actions: {
    async fetchContacts({ commit }) {
      const res = await fetch(API);
      const contacts = await res.json();

      commit("UPDATE_CONTACT", contacts);
    },
    async fetchSelectedContact(_, selected) {
      const res = await fetch(API + selected);
      const contact = await res.json();
      return contact;
    },
    async removeContact(_, delId) {
      try {
        await fetch(API + delId, {
          method: "DELETE"
        });
      } catch (error) {
        console.log("Error POST: " + error);
      }
    },
    async addContact(_, newContact) {
      try {
        await fetch(API, {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.log("Error POST: " + error);
      }
    },
    async editContact(_, editedContact) {
      try {
        await fetch(API + editedContact.id, {
          method: "PUT",
          body: JSON.stringify(editedContact),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.log("Error PUT: " + error);
      }
    }
  },
  mutations: {
    UPDATE_CONTACT(state, contacts) {
      state.contacts = contacts;
    }
  },
  state: {
    contacts: []
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    }
  }
};

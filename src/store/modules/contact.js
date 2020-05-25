const API = "http://127.0.0.1:3000/";
let base = "contacts/";
export default {
  state: {
    contacts: [],
    isLoggedIn: false
  },
  actions: {
    async fetchContacts({ commit }) {
      const res = await fetch(API + base);
      const contacts = await res.json();

      commit("UPDATE_CONTACT", contacts);
    },
    async fetchSelectedContact(_, selected) {
      const res = await fetch(API + base + selected);
      const contact = await res.json();
      return contact;
    },
    async removeContact(_, delId) {
      try {
        await fetch(API + base + delId, {
          method: "DELETE"
        });
      } catch (error) {
        console.log("Error POST: " + error);
      }
    },
    async addContact(_, newContact) {
      try {
        await fetch(API + newContact.base, {
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
        await fetch(API + base + editedContact.id, {
          method: "PUT",
          body: JSON.stringify(editedContact),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.log("Error PUT: " + error);
      }
    },
    async checkLoginPassword(_, logPas) {
      let accessTrue = false;
      const res = await fetch(API + logPas.base);
      const users = await res.json();
      users.forEach(el => {
        if (el.email === logPas.email && el.password === logPas.password) {
          accessTrue = true;
        }
      });
      return accessTrue;
    },
    toggleIsLogged({ commit }) {
      commit("TOGGLE_LOGGEDIN");
    }
  },
  mutations: {
    UPDATE_CONTACT(state, contacts) {
      state.contacts = contacts;
    },
    TOGGLE_LOGGEDIN(state) {
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    isLogged(state) {
      return state.isLoggedIn;
    }
  }
};

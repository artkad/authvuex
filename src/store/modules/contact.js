export default {
  actions: {
    async fetchContacts({ commit }) {
      // const res = await fetch("http://127.0.0.1:8080/users?_limit=" + limit);
      const res = await fetch("http://127.0.0.1:3000/contacts");
      const contacts = await res.json();

      commit("updateContacts", contacts);
    }
  },
  mutations: {
    updateContacts(state, contacts) {
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

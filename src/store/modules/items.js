import users from "../../api/users";

const state = {
  all: []
};

const getters = {};

const actions = {
  getAllItems({ commit }) {
    users.getUsers().then(users => {
      commit("setItems", users);
    });
  }
};

const mutations = {
  setItems(state, items) {
    state.all = items;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

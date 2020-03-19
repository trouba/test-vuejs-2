import users from "../../api/users";

const state = {
  all: [],
  user: {}
};
const getters = {};

const actions = {
  getAllUsers({ commit }) {
    users.getUsers().then(users => {
      commit("setUsers", users);
    });
  }
};

const mutations = {
  setUsers(state, users) {
    state.all = users;
  },
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

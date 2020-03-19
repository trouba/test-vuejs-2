import users from "../../api/users";

const getDefaultUserState = () => {
  return {
    first_name: "",
    last_name: "",
    avatar: "",
    email: ""
  };
};
const state = {
  all: [],
  current: getDefaultUserState()
};

const getters = {};

const actions = {
  getAllUsers({ commit }) {
    users.getUsers().then(users => {
      commit("setUsers", users);
    });
  },
  getUser({ commit }, payload) {
    users.getUser(payload.id).then(user => {
      commit("setUser", user);
    });
  },
  resetUser({ commit }) {
    commit("resetUser");
  }
};

const mutations = {
  setUsers(state, users) {
    state.all = users;
  },
  setUser(state, user) {
    state.current = user;
  },
  resetUser(state) {
    state.current = getDefaultUserState();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

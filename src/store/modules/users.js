import usersApi from "../../api/users";

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

export const actions = {
  async getAllUsers({ commit }) {
    const users = await usersApi.getUsers();
    commit("setUsers", users);
  },
  async getUser({ commit }, payload) {
    const user = await usersApi.getUser(payload.id);
    commit("setUser", user);
  },
  resetUser({ commit }) {
    commit("resetUser");
  }
};

export const mutations = {
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

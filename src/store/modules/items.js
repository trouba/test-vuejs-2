import axios from "axios";

const state = {
  all: []
};

const getters = {};

const actions = {
  getAllItems({ commit }) {
    const source = "https://reqres.in/api/users?page=1";

    axios
      .get(source)
      .then(r => r.data.data)
      .then(items => {
        console.log(items);
        commit("setItems", items);
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

const state = {
  all: []
};

const getters = {};

const actions = {
  getAllItems({ commit }) {
    commit("setItems", [
      {
        id: 1,
        name: "tata",
        url: "www.tata.fr"
      },
      {
        id: 2,
        name: "toto",
        url: "www.toto.fr"
      }
    ]);
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

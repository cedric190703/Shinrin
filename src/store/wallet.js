const state = {
  wallet: [],
  PhotoViewer: false,
};

const guetters = {};

const mutations = {
  statusViewer: (state) => {
    console.log("status");
    state.PhotoViewer = !state.PhotoViewer;
  },
  setViewer: (state) => {
    console.log("set");
    state.PhotoViewer = true;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  guetters,
  mutations,
  actions,
};

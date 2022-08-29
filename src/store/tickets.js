const state = {
  tickets: [],
  card: false,
  info: false,
  upload: false,
};

const guetters = {};

const mutations = {
  setCard: (state, elt) => {
    state.card = elt;
  },
  setUpload: (state, elt) => {
    state.upload = elt;
  },
  setInfo: (state, elt) => {
    state.info = elt;
  },
  addTiquet: (state, e) => {
    state.card = false;
    state.upload = false;
    state.info = false;
    state.tickets.push(e);
  },
  removeTicket: (state, index) => {
    console.log("hello", index);
    state.tickets.splice(index, 1);
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

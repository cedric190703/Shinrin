const state = {
  tickets: [],
  card: false,
  info: false,
  upload: false,
  viewTicket: false,
  zoomTicket: false,
};

const guetters = {};

const mutations = {
  setUpload: (state) => {
    state.upload = !state.upload;
  },
  setCard: (state) => {
    state.card = !state.card;
  },
  setInfo: (state) => {
    state.info = !state.info;
  },
  consultTicket: (state) => {
    state.viewTicket = !state.viewTicket;
  },
  zoomTicket: (state) => {
    state.zoomTicket = !state.zoomTicket;
  },
  setChanges: (state, elt) => {
    console.log("hello");
    state.viewTicket = false;
    state.tickets[elt[0]] = elt[1];
  },
  addTicket: (state, e) => {
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

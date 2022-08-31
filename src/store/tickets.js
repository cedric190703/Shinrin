import { date } from "quasar";
const state = {
  tickets: [],
  card: false,
  info: false,
  upload: false,
  viewTicket: false,
  zoomTicket: false,
  filtre: "Enseigne",
  tri: "Enseigne",
  mode: "Croissant",
  IntervalPrice: [0, 300],
  prixSet: false,
  dateSet: false,
  PriceMin: 0,
  PriceMax: 350,
  dateRange: { from: "2022/07/08", to: "2022/07/31" },
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
  prixSet: (state, min, max) => {
    state.IntervalPrice = [min, max];
  },
  nouvelInterval: (state, elt) => {
    state.prixSet = !state.prixSet;
    state.PriceMin = elt[0].min;
    state.PriceMax = elt[0].max;
    state.IntervalPrice = [elt[1], elt[2]];
  },
  nouvelleDate: (state, range) => {
    console.log("here WTF");
    state.dateSet = !state.dateSet;
    state.dateRange = range;
  },
  statusPrix: (state) => {
    state.prixSet = !state.prixSet;
  },
  statusDate: (state) => {
    state.dateSet = !state.dateSet;
  },
  consultTicket: (state) => {
    state.viewTicket = !state.viewTicket;
  },
  zoomTicket: (state) => {
    state.zoomTicket = !state.zoomTicket;
  },
  setFiltre: (state, filtre) => {
    state.filtre = filtre;
  },
  setTri: (state, tri) => {
    state.tri = tri;
    if (tri === "Enseigne") {
      state.tickets.sort((a, b) => a.enseigne.localeCompare(b.enseigne));
    }
    if (tri === "Prix") {
      state.tickets.sort((a, b) => {
        return a.prix - b.prix;
      });
    }
    if (tri === "Type") {
      state.tickets.sort((a, b) => a.typeAchat.localeCompare(b.typeAchat));
    }
    if (tri === "Date") {
      state.tickets.sort((a, b) => {
        return a.realTime - b.realTime;
      });
    }
    if (state.mode === "Decroissant") {
      state.tickets.reverse();
    }
  },
  setMode: (state, mode) => {
    if (state.mode !== mode) {
      state.mode = mode;
      state.change = true;
    }
  },
  setChanges: (state, elt) => {
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
    state.tickets.splice(index, 1);
  },
};

const actions = {
  setMode({ commit, state }, mode) {
    commit("setMode", mode);
    commit("setTri", state.tri);
  },
};

export default {
  namespaced: true,
  state,
  guetters,
  mutations,
  actions,
};

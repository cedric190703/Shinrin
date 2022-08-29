const state = {
  users: [],
  userStatus: false,
  user: {
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
  },
};

const guetters = {};

const mutations = {
  addUser: (state, user) => {
    console.log("User create");
    state.user.telephone = user.telephone;
    state.user.nom = user.nom;
    state.user.prenom = user.prenom;
    state.users.push(state.user);
  },
  etapeOne: (state, user) => {
    console.log("Etape One passed");
    (state.user.email = user.email), (state.user.password = user.password);
  },
  UserLogin: (state, user) => {
    console.log("try to log user");
    state.users.forEach((element) => {
      if (user.email === element.email && user.password === element.password) {
        state.userStatus = true;
        return;
      }
    });
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

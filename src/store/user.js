const state = {
  users: [],
  userStatus: false,
  user: {
    nom: "Nom",
    prenom: "Prenom",
    telephone: "0634120912",
    email: "exemple@gmail.com",
    password: "118218",
    modeSombre: false,
    avatar:
      "https://th.bing.com/th/id/OIP.ezvLBxiKJAB4x5uTqBb35QHaHa?pid=ImgDet&rs=1",
  },
  element: "",
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
  ModeSombre: (state) => {
    state.user.modeSombre = !state.user.modeSombre;
  },
  setElement: (state, element) => {
    state.element = element;
  },
  etapeOne: (state, user) => {
    console.log("Etape One passed");
    (state.user.email = user.email), (state.user.password = user.password);
  },
  setAvatar: (state, image) => {
    state.user.avatar = image;
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
  setUser: (state, user) => {
    console.log("hello");
    state.user = user;
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

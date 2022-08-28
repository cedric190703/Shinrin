const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginSignLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexLoginSignin.vue") },
      {
        path: "Login",
        component: () => import("pages/LoginSign/LoginIndex.vue"),
      },
      {
        path: "Sign",
        component: () => import("pages/LoginSign/SignIndex.vue"),
      },
      {
        path: "EtapeTwo",
        component: () => import("pages/LoginSign/EtapeTwo.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("layouts/MainApp.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/home/tiquetsPage.vue"),
      },
      {
        path: "DashBoard",
        component: () => import("pages/home/dashBoard.vue"),
      },
      { path: "Menu", component: () => import("pages/home/menuPage.vue") },
      { path: "Wallet", component: () => import("pages/home/walletPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          id="menu"
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title> Shinrin </q-toolbar-title>
        <q-toolbar-title
          style="position: absolute; right: 5%; font-size: x-large"
          >{{ title }}</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-footer id="footer">
      <q-tabs>
        <q-route-tab
          name="tiquets"
          icon="receipt_long"
          to="/home/"
          label="Tiquets"
          @click="title = 'Tiquets'"
        />
        <q-route-tab
          name="wallet"
          icon="wallet"
          to="/home/Wallet"
          label="Wallet"
          @click="title = 'Wallet'"
        />
        <q-route-tab
          name="tableau de bord"
          icon="analytics"
          to="/home/DashBoard"
          label="Tableau de bord"
          @click="title = 'Tableau de bord'"
        ></q-route-tab>
        <q-route-tab
          @click="title = 'Menu'"
          name="menu"
          icon="menu"
          to="/home/Menu"
          label="Menu"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <q-scroll-area class="fit q-pa-sm"> </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainApp",

  setup() {
    const title = ref("Tiquets");
    const leftDrawerOpen = ref(false);
    const tab = ref("menu");
    return {
      title,
      tab,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
@media screen and (max-width: 767px) {
  #menu {
    display: none;
  }
}

@media screen and (min-width: 767px) {
  #footer {
    display: none;
  }
}
</style>

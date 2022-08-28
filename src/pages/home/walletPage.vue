<template>
  <div>
    <div class="q-gutter-md row items-start q-pl-lg q-pt-lg">
      <q-input
        filled
        label="Rechercher"
        maxlength="12"
        style="width: 95%; margin-left: 3%"
      >
        <template v-slot:before>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/img/avatar5.jpg"
              style="
                position: absolute;
                width: 55px;
                height: 55px;
                padding: 10%;
              "
            />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="tune" color="black" />
          <q-btn round dense flat icon="more_vert" color="black" />
        </template>
      </q-input>
    </div>
    <div>
      <q-intersection
        class="tiquets"
        v-show="count > 0"
        v-for="n in 15"
        :key="n"
        once
        transition="scale"
      >
        <WalletComp />
      </q-intersection>
    </div>
    <div class="no-tiquets" style="text-align: center" v-show="count === 0">
      <img
        src="../../assets/wallet.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 20%"
      />
      <div class="text-h4 text-purple-8">Pas encore de cartes de fidélités</div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="purple-9" />
    </q-page-sticky>
  </div>
</template>
<script>
import { ref } from "vue";
import WalletComp from "../../components/walletComp.vue";
export default {
  setup() {
    const count = ref(1);
    return {
      count,
    };
  },
  components: { WalletComp },
};
</script>
<style></style>

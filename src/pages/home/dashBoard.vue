<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-input
      outlined
      style="width: 100%; margin-left: 5%"
      label="Rechercher des données"
      maxlength="12"
    >
      <template v-slot:before>
        <q-avatar>
          <img
            :src="avatar"
            style="position: absolute; width: 55px; height: 55px; padding: 10%"
          />
        </q-avatar>
      </template>
      <template v-slot:append>
        <q-icon name="search" />
      </template>
      <template v-slot:after>
        <q-btn
          round
          dense
          flat
          icon="tune"
          color="white"
          class="bg-primary q-mr-sm"
        />
        <q-btn round dense flat icon="sort" color="white" class="bg-primary" />
      </template>
    </q-input>
    <div class="data" v-show="count > 0"></div>
    <div class="noData" style="text-align: center" v-show="count === 0">
      <img
        src="../../assets/data.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 25%"
      />
      <div class="text-h4 text-purple-8">Pas encore de donnée</div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const $store = useStore();
    const avatar = ref($store.state.user.user.avatar);
    const count = ref(0);
    return {
      count,
      avatar,
    };
  },
};
</script>
<style></style>

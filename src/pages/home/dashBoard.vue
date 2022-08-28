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
            src="https://cdn.quasar.dev/img/avatar5.jpg"
            style="position: absolute; width: 55px; height: 55px; padding: 10%"
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
    <div class="data" v-show="count > 0"></div>
    <div class="noData" style="text-align: center" v-show="count === 0">
      <img
        src="../../assets/data.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 25%"
      />
      <div class="text-h4 text-purple-8">Pas encore de données</div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
<style></style>

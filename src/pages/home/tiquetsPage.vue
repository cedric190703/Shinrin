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
    <div class="tiquets" v-show="count > 0" v-for="n in 15" :key="n">
      <TiquetComp />
    </div>
    <div class="no-tiquets" style="text-align: center" v-show="count === 0">
      <img
        src="../../assets/tiquets.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 25%"
      />
      <div class="text-h4 text-purple-8">Pas encore de tiquets</div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="purple-9" />
    </q-page-sticky>
  </div>
</template>
<script>
import { ref } from "vue";
import TiquetComp from "src/components/tiquetComp.vue";
export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
  components: { TiquetComp },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
</style>

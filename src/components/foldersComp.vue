<template>
  <div>
    <q-btn icon="arrow_back" round color="primary" @click="setElement('')" />
    <q-input bottom-slots label="Rechercher un dossier" maxlength="12">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
      <template v-slot:after>
        <q-btn round flat color="white" class="bg-primary" icon="tune" />
      </template>
    </q-input>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        class="my-card row bg-purple-10 text-white"
        style="width: 100%"
        v-for="n in 15"
        :key="n"
      >
        <q-card-section>
          <q-btn icon="folder" style="border: 2px solid white" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Carrefour</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section style="position: absolute; right: 0">
          <q-btn round icon="more_vert" style="border: 2px solid white" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "foldersComp",
  setup() {
    const $store = useStore();
    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    return {
      setElement,
    };
  },
};
</script>

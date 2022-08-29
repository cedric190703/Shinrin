<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card row" style="width: 100%">
      <q-card-section>
        <div
          class="bg-purple-9"
          style="width: 5px; height: 100%; border-radius: 25px"
        ></div>
      </q-card-section>
      <q-card-section style="margin-right: 5%">
        <div class="text-h5">{{ enseigne }}</div>
        <div class="text-h6">{{ tag }}</div>
        <div class="text-h9">{{ date }}</div>
        <div class="text-h10">{{ heure }}</div>
      </q-card-section>
      <q-card-section style="margin-top: 6%">
        <div class="text-h6">{{ prix }}€</div>
      </q-card-section>
      <q-card-section
        style="position: absolute; right: 0%; margin-top: 4%"
        vertical
        class="justify-around q-px-md"
      >
        <q-btn-dropdown split flat round dropdown-icon="more_vert">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="saved_search"
                  color="primary"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>Consulter le ticket</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="download" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Télécharger</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="delete" color="purple-9" text-color="white" />
              </q-item-section>
              <q-item-section @click="removeTicket()">
                <q-item-label>Supprimer</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["index", "enseigne", "date", "heure", "prix", "tag"],
  setup() {
    const $store = useStore();

    const removeTicket = () => {
      $store.commit("tickets/removeTicket", index);
    };

    return {
      removeTicket,
    };
  },
};
</script>

<template>
  <div>
    <q-card>
      <q-card-section>
        <div style="text-align: center" class="text-h6 bg-primary text-white">
          Saisir un intervalle de dates
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          <div class="q-mb-md" style="text-align: center">
            <span style="font-weight: bold; text-decoration: underline">{{
              range
            }}</span>
          </div>

          <q-date v-model="range" range />
        </div>
      </q-card-section>
      <q-card-section>
        <div style="text-align: center">
          <q-btn color="primary" text-color="white" @click="Save()"
            >Enregistrer</q-btn
          >
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();

    const range = ref($store.state.tickets.dateRange);
    const Save = () => {
      $store.commit("tickets/nouvelleDate", range.value);
    };
    return {
      range,
      Save,
    };
  },
};
</script>

<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="q-mb-md">Selectionnez votre prix min et votre prix max</div>
        <div class="row">
          <q-input
            label="min"
            type="number"
            filled
            style="width: 42%"
            v-model="intervalMin"
            :val="IntervalPrice[0]"
          />
          <q-input
            style="position: absolute; right: 4%; width: 42%"
            label="max"
            type="number"
            filled
            v-model="intervalMax"
            :val="IntervalPrice[1]"
          />
        </div>
      </q-card-section>
      <q-card-section style="border: 2px solid blue" class="q-pb-xl">
        <q-item-section avatar>
          <q-icon name="euro_symbol" />
        </q-item-section>
        <div style="text-align: center">
          <q-range
            style="width: 85%"
            class="q-mt-xl"
            center
            v-model="range"
            label-always
            :min="parseInt(intervalMin)"
            :max="parseInt(intervalMax)"
          />
        </div>
      </q-card-section>
      <q-card-section style="text-align: center">
        <q-btn color="primary" @click="enregistrer()">Enregistrer</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";

import { ref, computed } from "vue";
export default {
  setup() {
    const $store = useStore();
    const intervalMin = ref($store.state.tickets.IntervalPrice[0]);
    const intervalMax = ref($store.state.tickets.IntervalPrice[1]);
    const IntervalPrice = computed({
      get: () => $store.state.tickets.IntervalPrice,
      set: (val) => {
        $store.commit(
          "tickets/prixSet",
          IntervalPrice.value[0],
          IntervalPrice.value[1]
        );
      },
    });
    const range = ref({
      min: parseInt(intervalMin.value),
      max: parseInt(intervalMax.value),
    });
    const enregistrer = () => {
      $store.commit("tickets/nouvelInterval", Save());
    };
    const Save = () => {
      return [
        range.value,
        parseInt(intervalMin.value),
        parseInt(intervalMax.value),
      ];
    };
    return {
      IntervalPrice,
      intervalMin,
      intervalMax,
      range,
      enregistrer,
      Save,
    };
  },
};
</script>

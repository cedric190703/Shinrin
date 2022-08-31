<template>
  <div>
    <q-btn-dropdown
      round
      flat
      dropdown-icon="tune"
      color="white"
      class="bg-primary q-mr-sm"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>Filtres :</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="link === 'Enseigne'"
          active-class="my-menu-link"
          @click="setFiltre('Enseigne')"
        >
          <q-item-section avatar>
            <q-btn icon="store" color="primary" round text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Enseigne</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="link === 'Prix'"
          active-class="my-menu-link"
          @click="setPrix()"
        >
          <q-item-section avatar>
            <q-btn icon="payments" color="primary" round text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Prix</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="link === 'Tag'"
          active-class="my-menu-link"
          @click="setFiltre('Tag')"
        >
          <q-item-section avatar>
            <q-btn icon="tag" color="primary" round text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tag</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          :active="link === 'Date'"
          active-class="my-menu-link"
          @click="setDate()"
        >
          <q-item-section avatar>
            <q-btn
              icon="calendar_month"
              color="primary"
              round
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Date</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-dialog v-model="prixSet">
      <RangeFilter />
    </q-dialog>
    <q-dialog v-model="dateSet">
      <DateRange />
    </q-dialog>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import RangeFilter from "./rangeFilter.vue";
import DateRange from "./dateRange.vue";
export default {
  setup() {
    const $store = useStore();
    const prixSet = computed({
      get: () => $store.state.tickets.prixSet,
      set: (val) => {
        $store.commit("tickets/statusPrix");
      },
    });
    const dateSet = computed({
      get: () => $store.state.tickets.dateSet,
      set: (val) => {
        $store.commit("tickets/statusDate");
      },
    });
    const setDate = () => {
      $store.commit("tickets/setFiltre", "Date");
      $store.commit("tickets/statusDate");
    };
    const setPrix = () => {
      $store.commit("tickets/setFiltre", "Prix");
      $store.commit("tickets/statusPrix");
    };
    const link = computed({
      get: () => $store.state.tickets.filtre,
      set: (val) => {
        $store.commit("tickets/setFiltre", val);
      },
    });
    const setFiltre = (filtre) => {
      link.value = filtre;
      $store.commit("tickets/setFiltre", filtre);
    };
    return {
      link,
      setFiltre,
      prixSet,
      setPrix,
      dateSet,
      setDate,
    };
  },
  components: { RangeFilter, DateRange },
};
</script>
<style>
.my-menu-link {
  color: white;
  background: purple;
}
</style>

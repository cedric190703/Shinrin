<template>
  <div>
    <q-btn-dropdown
      round
      flat
      dropdown-icon="filter_list"
      color="white"
      class="bg-primary q-mr-sm"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>Trier :</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="link === 'Enseigne'"
          active-class="my-menu-link"
          @click="setTri('Enseigne')"
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
          @click="setTri('Prix')"
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
          :active="link === 'Type'"
          active-class="my-menu-link"
          @click="setTri('Type')"
        >
          <q-item-section avatar>
            <q-btn
              icon="shopping_cart"
              color="primary"
              round
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Type de produit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="link === 'Date'"
          active-class="my-menu-link"
          @click="setTri('Date')"
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
        <q-separator />
        <q-item-section class="q-pa-md">
          <div>Trier par</div>
        </q-item-section>
        <q-item
          clickable
          v-close-popup
          :active="mode === 'Croissant'"
          active-class="my-menu-mode"
          @click="setMode('Croissant')"
        >
          <q-item-section avatar>
            <q-btn
              icon="arrow_upward"
              color="primary"
              round
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ordre croissant</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          :active="mode === 'Decroissant'"
          active-class="my-menu-mode"
          @click="setMode('Decroissant')"
        >
          <q-item-section avatar>
            <q-btn
              icon="arrow_downward"
              color="primary"
              round
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ordre décroissant</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const $store = useStore();
    const link = computed({
      get: () => $store.state.tickets.tri,
      set: (val) => {
        $store.commit("tickets/setTri", val);
      },
    });
    const setTri = (tri) => {
      link.value = tri;
      $store.commit("tickets/setTri", tri);
    };
    const mode = computed({
      get: () => $store.state.tickets.mode,
      set: (val) => {
        $store.dispatch("tickets/setMode", val);
      },
    });
    const setMode = (mode) => {
      $store.dispatch("tickets/setMode", mode);
    };
    return {
      link,
      mode,
      setTri,
      setMode,
    };
  },
};
</script>
<style>
.my-menu-link {
  color: white;
  background: purple;
}
.my-menu-mode {
  color: white;
  background: rgb(104, 104, 16);
}
</style>

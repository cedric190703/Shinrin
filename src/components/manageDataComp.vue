<template>
  <div>
    <q-btn icon="arrow_back" round color="primary" @click="setElement('')" />
    <q-card class="q-ma-sm" v-for="n in 3" :key="n">
      <q-card-section class="row">
        <q-card-section>
          <q-color style="width: 100%"></q-color>
        </q-card-section>
        <q-card-section>
          <q-card-section>
            <div class="q-pb-md">Pie chart</div>
            <q-btn icon="more_vert"></q-btn>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "manageData",
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

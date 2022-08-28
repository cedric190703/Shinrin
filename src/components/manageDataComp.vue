<template>
  <div>
    <q-card class="q-ma-sm" v-for="n in 10" :key="n">
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
export default {
  name: "manageData",
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <q-btn icon="arrow_back" round color="primary" />
    <q-input
      bottom-slots
      v-model="text"
      label="Rechercher un dossier"
      maxlength="12"
      :dense="dense"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
      <template v-slot:after>
        <q-btn round dense flat color="white" class="bg-primary" icon="tune" />
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

        <q-card-section>
          <q-btn
            round
            style="position: absolute; right: -290%; border: 2px solid white"
            icon="more_vert"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>

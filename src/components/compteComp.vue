<template>
  <div>
    <q-btn
      push
      color="primary"
      round
      icon="arrow_back"
      style="position: absolute"
      @click="setElement('')"
    />

    <div class="q-pb-md text-h6" style="margin-left: 65%">Mon compte</div>
    <div class="text-center q-mb-lg">
      <q-btn round>
        <q-avatar size="95px">
          <q-file standout />
        </q-avatar>
      </q-btn>
      <q-btn
        class="absolute all-pointer-events bg-pirmary"
        round
        color="primary"
        icon="edit"
        size="small"
      />
    </div>
    <div class="text-center"></div>
    <div class="text-center q-pb-md">
      <q-btn
        unelevated
        round
        color="primary"
        icon="power_settings_new"
        to="/"
      />
      <div>Déconnexion</div>
    </div>
    <q-card class="my-card">
      <q-item-section class="q-pb-sm q-pl-md q-pr-md">
        <q-input v-model="nom" label="Nom"></q-input>
      </q-item-section>
      <q-item-section class="q-pb-sm q-pl-sm q-pr-md">
        <q-input v-model="prenom" label="Prénom"></q-input>
      </q-item-section>
      <q-item-section class="q-pb-sm q-pl-sm q-pr-md">
        <q-input type="mail" v-model="mail" label="mail"></q-input>
      </q-item-section>
      <q-item-section class="q-pl-sm q-pr-md">
        <q-input
          v-model="telephone"
          outlined
          type="number"
          label="Numéro de téléphone"
          lazy-rules
          step="any"
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please type transaction amount',
          ]"
        />
      </q-item-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "compteComp",
  setup() {
    const $store = useStore();
    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    const nom = ref("Nom");
    const prenom = ref("Nom");
    const telephone = ref("0645546574");
    const mail = ref("exemple@gmail.com");

    return {
      nom,
      prenom,
      telephone,
      mail,
      setElement,
    };
  },
};
</script>

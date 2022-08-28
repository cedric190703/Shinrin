<template>
  <q-page padding>
    <img
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/808/7734922808_43b80d33-7f0b-4fb6-a190-5fea527c217c.png?cb=1661619001"
      alt="shinrin-logo"
      style="width: 300px; margin-top: 10%"
    />
    <div class="text-h5" style="margin-top: 5%">
      S'inscrire
      <span style="font-size: medium" class="text-primary"
        >(étape 2 sur 2)</span
      >
    </div>
    <q-input
      style="width: 80%; margin: 5% 10%"
      label="Nom"
      outlined
      placeholder="exemple@email.com"
      filled
    />
    <q-input style="width: 80%; margin: 5% 10%" label="Prénom" filled />
    <q-input
      style="width: 80%; margin: 5% 10%"
      label="Numéro de téléphone"
      filled
    />
    <div>
      <q-checkbox
        v-model="right"
        label="J'ai lu et j'accepte les conditions d'utilisation"
      />
    </div>
    <div>
      <q-checkbox
        v-model="right"
        label="J'ai lu et j'accepte la politique de confidentialité"
      />
    </div>
    <div class="bottom"></div>
    <q-btn
      style="width: 80%; margin-top: 5%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      to="/home"
      @click="create()"
    >
      Créer un compte
    </q-btn>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const text = ref("");
    const create = () => {
      $q.notify({
        message: "Vous êtes bien connecté !",
        color: "positive",
        actions: [
          {
            label: "OK",
            color: "white",
            handler: () => {},
          },
        ],
      });
    };
    return {
      text,
      create,
    };
  },
};
</script>

<style></style>

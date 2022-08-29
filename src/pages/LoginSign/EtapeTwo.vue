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
      v-model="nom"
      filled
      :rules="[(val) => !!val || 'Ce champ est requis']"
    />
    <q-input
      v-model="prenom"
      style="width: 80%; margin: 5% 10%"
      :rules="[(val) => !!val || 'Ce champ est requis']"
      label="Prénom"
      filled
    />
    <q-input
      style="width: 80%; margin: 5% 10%"
      filled
      v-model="telephone"
      label="Téléphone"
      hint="XX - XX - XX - XX - XX"
      mask="##-##-##-##-##"
      unmasked-value
      :rules="[(val) => !!val || 'Ce champ est requis']"
    />
    <div>
      <q-checkbox
        v-model="condition1"
        label="J'ai lu et j'accepte les conditions d'utilisation"
      />
    </div>
    <div>
      <q-checkbox
        v-model="condition2"
        label="J'ai lu et j'accepte la politique de confidentialité"
      />
    </div>
    <div class="bottom"></div>
    <q-btn
      style="width: 80%; margin-top: 5%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      @click="create()"
    >
      Créer un compte
    </q-btn>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const router = useRouter();
    const EtapeOne = computed({
      get: () => $store.state.user.user,
    });
    const nom = ref("");
    const prenom = ref("");
    const condition1 = ref(false);
    const condition2 = ref(false);
    const telephone = ref("");
    const create = () => {
      if (nom.value !== "" && prenom.value !== "" && telephone.value !== "") {
        if (
          condition1.value !== false &&
          condition2.value !== false &&
          EtapeOne.value.email !== "" &&
          EtapeOne.value.password !== ""
        ) {
          $store.commit("user/addUser", {
            nom: nom.value,
            prenom: prenom.value,
            telephone: telephone.value,
          });
          router.push({ path: "/home" });
          $q.notify({
            message: "Votre compte a bien été créé !",
            color: "positive",
            actions: [
              {
                label: "OK",
                color: "white",
                handler: () => {},
              },
            ],
          });
        } else {
          $q.notify({
            message: "Vous n'avez pas accepté les deux conditions",
            color: "negative",
            actions: [
              {
                label: "OK",
                color: "white",
                handler: () => {},
              },
            ],
          });
        }
      } else {
        $q.notify({
          message: "Des champs n'ont pas été remplis",
          color: "negative",
          actions: [
            {
              label: "OK",
              color: "white",
              handler: () => {},
            },
          ],
        });
      }
    };
    return {
      prenom,
      nom,
      telephone,
      EtapeOne,
      create,
      condition1,
      condition2,
    };
  },
};
</script>

<style></style>

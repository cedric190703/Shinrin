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
        >(étape 1 sur 2)</span
      >
    </div>
    <q-input
      style="width: 80%; margin: 5% 10%"
      type="email"
      label="E-mail"
      outlined
      placeholder="exemple@email.com"
      filled
    />
    <q-input
      style="width: 80%; margin: 5% 10%"
      type="password"
      label="mot de passe"
      filled
    />
    <q-input
      style="width: 80%; margin: 5% 10%"
      type="password"
      label="Confimation du mot de passe"
      filled
    />
    <q-btn
      style="width: 80%; margin-top: 5%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      to="/EtapeTwo"
    >
      Suivant
    </q-btn>
    <div class="bottom"></div>
    <div class="text-h7" style="margin-top: 11%; bottom: 6%">
      Vous avez déjà un compte ?
    </div>
    <q-btn class="text-white" id="create" to="/Login">Se connecter</q-btn>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref("");

    return {
      text,
    };
  },
};
</script>

<style>
#create {
  margin-top: 1%;
  width: 80%;
  background-color: #3f0cd8;
  height: 50px;
}
</style>

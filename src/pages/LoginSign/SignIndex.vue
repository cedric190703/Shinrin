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
      v-model="email"
      label="E-mail"
      :rules="[(val) => !!val || 'Ce champ est requis']"
      outlined
      placeholder="exemple@email.com"
      filled
    />
    <q-input
      v-model="password"
      style="width: 80%; margin: 5% 10%"
      filled
      :rules="[(val) => !!val || 'Ce champ est requis']"
      :type="isPwd ? 'password' : 'text'"
      label="Mot de passe"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-input
      v-model="password2"
      style="width: 80%; margin: 5% 10%"
      filled
      :rules="[(val) => !!val || 'Ce champ est requis']"
      :type="isPwd ? 'password' : 'text'"
      label="Mot de passe"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn
      style="width: 80%; margin-top: 5%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      @click="suivant()"
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
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const password2 = ref("");
    const isPwd = ref(true);
    const suivant = () => {
      if (
        email.value !== "" &&
        password.value !== "" &&
        password2.value !== ""
      ) {
        if (password.value !== password2.value) {
          notSamePassword();
        } else {
          console.log("hello");
          $store.commit("user/etapeOne", {
            email: email.value,
            password: password.value,
          });
          router.push({ path: "/EtapeTwo" });
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
    const notSamePassword = () => {
      $q.notify({
        message: "Les deux mots de passe ne correspondent pas",
        color: "negative",
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
      email,
      password,
      password2,
      suivant,
      notSamePassword,
      isPwd,
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

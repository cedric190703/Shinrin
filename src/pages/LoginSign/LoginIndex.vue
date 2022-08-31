<template>
  <q-page padding>
    <img
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/808/7734922808_43b80d33-7f0b-4fb6-a190-5fea527c217c.png?cb=1661619001"
      alt="shinrin-logo"
      style="width: 300px; margin-top: 10%"
    />
    <div class="text-h5" style="margin-top: 5%">Se connecter</div>
    <q-input
      style="width: 80%; margin: 5% 10%"
      v-model="email"
      type="email"
      label="E-mail"
      :rules="[(val) => !!val || 'Ce champ est requis']"
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
    <q-btn
      style="width: 80%; margin-top: 10%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      @click="login()"
    >
      Se connecter
    </q-btn>
    <div class="text-h8" id="forgot">Mot de passe oublié ?</div>
    <q-btn class="text-white" id="create" to="/Sign">Créer un compte</q-btn>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const $store = useStore();
    const password = ref("");
    const email = ref("");
    const userStatus = computed({
      get: () => $store.state.user.userStatus,
    });
    const valide = () => {
      $store.commit("user/UserLogin", {
        email: email.value,
        password: password.value,
      });
    };
    const login = () => {
      if (password.value !== "" && email.value !== "") {
        router.push({ path: "/home" });
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
      } else {
        $q.notify({
          message: "Des champs requis n'ont pas été remplis",
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
    const isPwd = ref(true);
    return {
      isPwd,
      password,
      email,
      login,
      userStatus,
      valide,
    };
  },
};
</script>

<style>
#forgot {
  margin-top: 2%;
  text-decoration: underline;
}

#forgot:hover {
  color: #155fd7;
}

#create {
  margin-top: 17%;
  width: 80%;
  background-color: #3f0cd8;
  height: 50px;
}
</style>

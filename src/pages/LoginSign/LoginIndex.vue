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
      type="email"
      label="E-mail"
      placeholder="exemple@email.com"
      filled
    />
    <q-input
      v-model="password"
      style="width: 80%; margin: 5% 10%"
      filled
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
      style="width: 80%; margin-top: 12%; border-radius: 20px; height: 50px"
      class="text-white bg-primary"
      to="/home"
      @click="login()"
    >
      Se connecter
    </q-btn>
    <div class="text-h8" id="forgot">Mot de passe oublié ?</div>
    <q-btn class="text-white" id="create" to="/Sign">Créer un compte</q-btn>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const login = () => {
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
    const text = ref("");
    const isPwd = ref(true);
    const password = ref("");
    return {
      text,
      isPwd,
      password,
      login,
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
  margin-top: 25%;
  width: 80%;
  background-color: #3f0cd8;
  height: 50px;
}
</style>

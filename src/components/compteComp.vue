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
          <img :src="avatar" alt="avatar-user" />
        </q-avatar>
      </q-btn>
      <q-btn
        class="absolute all-pointer-events bg-pirmary"
        round
        color="primary"
        icon="edit"
        size="small"
        @click="captureImage()"
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
      <q-item-section class="q-pb-sm q-pt-sm q-pl-md q-pr-md">
        <q-input filled v-model="nom" label="Nom"></q-input>
      </q-item-section>
      <q-item-section class="q-pb-sm q-pl-sm q-pr-md">
        <q-input filled v-model="prenom" label="Prénom"></q-input>
      </q-item-section>
      <q-item-section class="q-pb-sm q-pl-sm q-pr-md">
        <q-input filled type="mail" v-model="email" label="mail"></q-input>
      </q-item-section>
      <q-item-section class="q-pl-sm q-pr-md">
        <q-input
          filled
          v-model="telephone"
          label="Téléphone"
          hint="XX - XX - XX - XX - XX"
          mask="##-##-##-##-##"
          unmasked-value
        />
        <q-btn
          color="primary"
          @click="save()"
          class="q-mb-sm q-mt-md"
          text-color="white"
          >Enregister</q-btn
        >
      </q-item-section>
    </q-card>
  </div>
</template>

<script>
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
export default {
  name: "compteComp",
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    const user = computed({
      get: () => $store.state.tickets.user,
      set: (val) => {
        $store.commit("tickets/setUser", val);
      },
    });
    const imageSrc = ref("");

    async function captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });
      imageSrc.value = image.webPath;
      $store.commit("user/setAvatar", imageSrc.value);
    }

    const password = ref($store.state.user.user.password);
    const modeSombre = ref($store.state.user.user.modeSombre);
    const nom = ref($store.state.user.user.nom);
    const prenom = ref($store.state.user.user.prenom);
    const telephone = ref($store.state.user.user.telephone);
    const email = ref($store.state.user.user.email);
    const avatar = computed({
      get: () => $store.state.user.user.avatar,
    });

    const save = () => {
      if (telephone.value.length < 10) {
        $q.notify({
          type: "negative",
          message: `Numéro de téléphone incorrect`,
          actions: [
            {
              label: "OK",
              color: "white",
              handler: () => {},
            },
          ],
        });
      } else {
        $store.commit("user/setUser", {
          nom: nom.value,
          prenom: prenom.value,
          telephone: telephone.value,
          email: email.value,
          password: password.value,
          modeSombre: modeSombre.value,
          avatar: avatar.value,
        });
        $q.notify({
          type: "positive",
          message: `Votre compte a bien été modifié`,
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
      nom,
      prenom,
      telephone,
      password,
      email,
      setElement,
      save,
      user,
      avatar,
      imageSrc,
      captureImage,
    };
  },
};
</script>

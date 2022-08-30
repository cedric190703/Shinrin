<template>
  <div class="q-pa-md q-gutter-md">
    <div v-show="element === ''">
      <q-list bordered padding class="rounded-borders" style="width: 97%">
        <q-item-label header>Application</q-item-label>

        <q-item clickable @click="setElement('compte')">
          <q-item-section avatar top>
            <q-avatar icon="person" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Mon compte</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="setElement('QRcodes')">
          <q-item-section avatar top>
            <q-avatar icon="qr_code" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Mes QR codes ou codes barres</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="setElement('folders')">
          <q-item-section avatar top>
            <q-avatar icon="folder" color="teal" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Mes dossiers</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="setElement('data')">
          <q-item-section avatar top>
            <q-avatar icon="query_stats" color="teal" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Gérer mes données</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item-label header>Paramètres</q-item-label>

        <q-item clickable @click="setElement('confidentiality')">
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="purple-9" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Contrôle de confidentialité</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="setElement('settings')">
          <q-item-section avatar top>
            <q-avatar icon="settings" color="purple-9" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Réglages</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="compte" v-show="element === 'compte'">
      <CompteComp />
    </div>
    <div class="compte" v-show="element === 'QRcodes'">
      <QRComp />
    </div>
    <div class="compte" v-show="element === 'folders'">
      <FoldersComp />
    </div>
    <div class="compte" v-show="element === 'data'">
      <ManageDataComp />
    </div>
    <div class="compte" v-show="element === 'confidentiality'">
      <ConfidentialityComp />
    </div>
    <div class="compte" v-show="element === 'settings'">
      <SettingsComp />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CompteComp from "src/components/compteComp.vue";
import QRComp from "src/components/QRComp.vue";
import FoldersComp from "src/components/foldersComp.vue";
import ConfidentialityComp from "src/components/confidentialityComp.vue";
import SettingsComp from "src/components/settingsComp.vue";
import ManageDataComp from "../../components/manageDataComp.vue";
export default {
  setup() {
    const $store = useStore();
    const modeSombre = computed({
      get: () => $store.state.user.user.modeSombre,
    });
    const element = computed({
      get: () => $store.state.user.element,
    });
    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    return {
      element,
      modeSombre,
      setElement,
    };
  },
  components: {
    CompteComp,
    QRComp,
    FoldersComp,
    ConfidentialityComp,
    SettingsComp,
    ManageDataComp,
  },
};
</script>

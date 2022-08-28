<template>
  <div class="q-pa-md q-gutter-md">
    <div v-show="element === ''">
      <q-list bordered padding class="rounded-borders" style="width: 97%">
        <q-item-label header>Application</q-item-label>

        <q-item clickable v-ripple @click="element = 'compte'">
          <q-item-section avatar top>
            <q-avatar icon="person" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Mon compte</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="element = 'QRcodes'">
          <q-item-section avatar top>
            <q-avatar icon="qr_code" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Mes QR codes ou codes barres</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="element = 'folders'">
          <q-item-section avatar top>
            <q-avatar icon="folder" color="teal" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Mes dossiers</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="element = 'data'">
          <q-item-section avatar top>
            <q-avatar icon="query_stats" color="teal" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Gérer mes données</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item-label header>Paramètres</q-item-label>

        <q-item clickable v-ripple @click="element = 'confidentiality'">
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="purple-9" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Contrôle de confidentialité</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="element = 'settings'">
          <q-item-section avatar top>
            <q-avatar icon="settings" color="purple-9" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">Réglages</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-show="element !== ''">
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
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import CompteComp from "src/components/compteComp.vue";
import QRComp from "src/components/QRComp.vue";
import FoldersComp from "src/components/foldersComp.vue";
import ConfidentialityComp from "src/components/confidentialityComp.vue";
import SettingsComp from "src/components/settingsComp.vue";
import ManageDataComp from "../../components/manageDataComp.vue";
export default {
  setup() {
    const $q = useQuasar();
    const element = ref("");
    const DarkMode = () => {
      $q.dark.set(true);
    };
    return {
      element,
      DarkMode,
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
<style lang=""></style>

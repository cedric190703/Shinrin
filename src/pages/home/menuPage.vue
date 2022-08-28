<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="width: 97%">
      <q-item-label header>Application</q-item-label>

      <q-item clickable v-ripple to="/home/Compte">
        <q-item-section avatar top>
          <q-avatar icon="person" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Mon compte</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/home/QRcode">
        <q-item-section avatar top>
          <q-avatar icon="qr_code" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Mes QR codes ou codes barres</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/home/Folders">
        <q-item-section avatar top>
          <q-avatar icon="folder" color="teal" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Mes dossiers</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/home/ManageData">
        <q-item-section avatar top>
          <q-avatar icon="query_stats" color="teal" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Gérer mes données</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item-label header>Paramètres</q-item-label>

      <q-item clickable v-ripple to="/home/Confidentiality">
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="purple-9" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Contrôle de confidentialité</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/home/Settings">
        <q-item-section avatar top>
          <q-avatar icon="settings" color="purple-9" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Réglages</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();
    const elt = ref("");
    const DarkMode = () => {
      $q.dark.set(true);
    };
    return {
      elt,
      DarkMode,
    };
  },
};
</script>
<style lang=""></style>

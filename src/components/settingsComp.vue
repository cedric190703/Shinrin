<template>
  <div class="q-pa-md" style="max-width: 550px">
    <q-btn
      push
      color="primary"
      class="q-mb-lg"
      text-color="white"
      round
      icon="arrow_back"
    />
    <q-list bordered padding>
      <q-item-label header>Mode sombre</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-toggle
            v-model="darkMode"
            @click="setDarkMode()"
            label="Mode Sombre"
          />
        </q-item-section>
      </q-item>
      <q-item-label header>User Controls</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Content filtering</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict apps that can be
            downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Password</q-item-label>
          <q-item-label caption>
            Require password for purchase or use password to restrict purchase
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>General</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox />
        </q-item-section>

        <q-item-section>
          <q-item-label>Notifications</q-item-label>
          <q-item-label caption>
            Notify me about updates to apps or games that I downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox />
        </q-item-section>

        <q-item-section>
          <q-item-label>Sound</q-item-label>
          <q-item-label caption>
            Auto-update apps at anytime. Data charges may apply
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox />
        </q-item-section>

        <q-item-section>
          <q-item-label>Auto-add widgets</q-item-label>
          <q-item-label caption>
            Automatically add home screen widgets
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Notifications</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Friend request</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Picture uploaded</q-item-label>
          <q-item-label caption
            >Allow notification when uploading images</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" val="picture" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  name: "settingsComp",
  setup() {
    const $q = useQuasar();
    const darkMode = ref(false);
    const setDarkMode = () => {
      $q.dark.set(darkMode.value);
    };
    return {
      darkMode,
      setDarkMode,
    };
  },
};
</script>

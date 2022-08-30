<template>
  <div class="q-pa-md" style="whidth: 100%">
    <q-btn
      push
      color="primary"
      class="q-mb-lg"
      text-color="white"
      round
      icon="arrow_back"
      @click="setElement('')"
    />
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="explore"
        label="Politique de confidentialité"
        default-opened
        header-class="text-blue-9"
        class="q-mb-lg"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="perm_identity"
        label="Mes engagements"
        header-class="text-blue-8"
        class="q-mb-lg"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="smartphone"
        label="condition générale d'utilisation"
        header-class="text-blue-8"
        class="q-mb-lg"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="cookies"
        class="q-pl-sm q-mb-lg"
        label="Paramètre des cookies"
        header-class="text-teal-6"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="handshake"
        label="Politique de cookies"
        header-class="text-purple-7"
        class="q-mb-lg"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "confidentialityComp",
  setup() {
    const $store = useStore();

    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    return {
      setElement,
    };
  },
};
</script>

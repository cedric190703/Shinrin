<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card row" style="width: 100%">
      <q-card-section>
        <div
          class="bg-purple-9"
          style="width: 5px; height: 100%; border-radius: 25px"
        ></div>
      </q-card-section>
      <q-card-section style="margin-right: 5%">
        <div class="text-h5">{{ enseigne }}</div>
        <div class="text-h6" style="color: #155fd7">
          {{ hashTag() }}{{ tag }}
        </div>
        <div class="text-h9">{{ date }}</div>
        <div class="text-h10">{{ heure }}</div>
      </q-card-section>
      <q-card-section style="position: absolute; margin-top: 5%; right: 20%">
        <div class="text-h6">{{ prix }}€</div>
      </q-card-section>
      <q-card-section
        style="position: absolute; right: 0%; margin-top: 4%"
        vertical
        class="justify-around q-px-md"
      >
        <q-btn-dropdown split flat round dropdown-icon="more_vert">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar
                  icon="saved_search"
                  color="primary"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label @click="consulterTicket()"
                  >Consulter le ticket</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="download" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Télécharger</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="delete" color="purple-9" text-color="white" />
              </q-item-section>
              <q-item-section @click="removeTicket()">
                <q-item-label>Supprimer</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-card-section>
      <q-dialog v-model="viewTicket">
        <q-card class="my-card">
          <ConsulterTicket
            :index="index"
            :enseigne="enseigne"
            :date="date"
            :heure="heure"
            :prix="prix"
            :tag="tag"
            :typeAchat="typeAchat"
          />
        </q-card>
      </q-dialog>
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { computed } from "vue";
import ConsulterTicket from "./consulterTicket.vue";
export default {
  props: ["index", "enseigne", "date", "heure", "prix", "tag", "typeAchat"],
  setup(props) {
    const $q = useQuasar();
    const $store = useStore();
    const hashTag = () => {
      if (props.tag !== "") {
        return "#";
      }
    };
    const consulterTicket = () => {
      $store.commit("tickets/consultTicket");
    };
    const viewTicket = computed({
      get: () => $store.state.tickets.viewTicket,
      set: (val) => {
        $store.commit("tickets/consultTicket");
      },
    });
    const removeTicket = () => {
      $q.dialog({
        title: "Confirmer",
        message: "Êtes-vous sûr de vouloir supprimer ce ticket ?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          $store.commit("tickets/removeTicket", props.index);
          $q.notify({
            type: "positive",
            message: `Le ticket a bien été supprimé`,
            actions: [
              {
                label: "OK",
                color: "white",
                handler: () => {},
              },
            ],
          });
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    };
    return {
      removeTicket,
      viewTicket,
      consulterTicket,
      hashTag,
    };
  },
  components: { ConsulterTicket },
};
</script>

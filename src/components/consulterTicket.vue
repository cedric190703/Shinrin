<template>
  <div>
    <q-card-section>
      <q-btn
        style="position: absolute; right: 0; top: 15%"
        icon="close"
        color="negative"
        text-color="white"
        round
        class="q-mb-md q-mr-md"
        @click="close()"
      />
      <div class="text-h6 q-pt-lg">Informations sur le ticket</div>
    </q-card-section>
    <q-card-section>
      <q-btn
        style="position: absolute"
        icon="zoom_out_map"
        round
        color="primary"
        text-color="white"
        @click="zoomerTicket()"
      />
      <img
        style="width: 100%"
        src="https://s3-media2.fl.yelpcdn.com/bphoto/L9LaHNv2HjaUkW0VFqU9Nw/o.jpg"
        alt="ticket-image"
      />
    </q-card-section>
    <q-card-section>
      <q-input
        filled
        :rules="[(val) => !!val || 'Ce champ est requis']"
        v-model="Enseigne"
        label="Enseigne"
      >
        <template v-slot:prepend>
          <q-icon name="store" />
        </template>
      </q-input>
      <q-input filled v-model="Tag" label="Tag(optionnel)" class="q-pb-lg">
        <template v-slot:prepend>
          <q-icon name="tag" />
        </template>
      </q-input>
      <q-input
        filled
        step="any"
        type="number"
        :rules="[(val) => !!val || 'Ce champ est requis']"
        v-model="Prix"
        label="Prix"
      >
        <template v-slot:prepend>
          <q-icon name="payments" />
        </template>
        <template v-slot:append>
          <q-icon name="euro" />
        </template>
      </q-input>
      <q-select
        rounded
        outlined
        v-model="TypeAchat"
        :options="options"
        label="Type d'achat(optionnel)"
      />
    </q-card-section>

    <div style="text-align: center">
      <q-date v-model="DateA" />
      <q-time v-model="Heure" />
    </div>
    <q-card-section>
      <q-btn
        style="width: 100%"
        color="primary"
        label="Enregister"
        @click="setChanges()"
      />
    </q-card-section>
    <q-dialog v-model="zoomTicket">
      <ZoomTicket />
    </q-dialog>
  </div>
</template>
<script>
import { date } from "quasar";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import ZoomTicket from "./zoomTicket.vue";
export default {
  props: ["index", "enseigne", "date", "heure", "prix", "tag", "typeAchat"],
  setup(props) {
    const $q = useQuasar();
    const $store = useStore();
    const DateA = ref(props.date);
    const Heure = ref(props.heure);
    const Prix = ref(props.prix);
    const Tag = ref(props.tag);
    const TypeAchat = ref(props.typeAchat);
    const Enseigne = ref(props.enseigne);
    const zoomerTicket = () => {
      $store.commit("tickets/zoomTicket");
    };
    const zoomTicket = computed({
      get: () => $store.state.tickets.zoomTicket,
      set: (val) => {
        $store.commit("tickets/zoomTicket");
      },
    });
    const close = () => {
      $store.commit("tickets/consultTicket");
    };
    const options = ref([
      "Alimentation",
      "Artisan",
      "Commerces de proximité",
      "Culture",
      "Centre commercial",
      "Divers",
      "Habillement",
      "Jardinage et bricolage",
      "Maison et décoration",
      "Santé et bien-être",
      "Services",
      "Sortir",
      "Sports et loisirs",
      "Tourisme",
      "Transport",
      "Autre",
    ]);
    const setChanges = () => {
      if (Enseigne.value !== "" && Prix.value !== "") {
        $store.commit("tickets/setChanges", [
          props.index,
          {
            date: DateA.value,
            heure: Heure.value,
            enseigne: Enseigne.value,
            prix: Prix.value,
            tag: Tag.value,
            typeAchat: TypeAchat.value,
            realTime: date.extractDate(DateA.value, "YYYY/MM/DD").getTime(),
          },
        ]);
        $q.notify({
          type: "positive",
          message: `Votre ticket a bien été modifié`,
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
          type: "negative",
          message: `Des champs requis n'ont pas été remplis`,
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
      DateA,
      options,
      Heure,
      Prix,
      Tag,
      TypeAchat,
      Enseigne,
      setChanges,
      close,
      zoomTicket,
      zoomerTicket,
    };
  },
  components: { ZoomTicket },
};
</script>

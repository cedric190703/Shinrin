<template>
  <div>
    <q-card-section>
      <div class="text-h6">Informations sur le fichier</div>
    </q-card-section>
    <q-card-section style="margin-bottom: -5%">
      <q-input
        filled
        :rules="[(val) => !!val || 'Ce champ est requis']"
        v-model="enseigne"
        label="Enseigne"
      >
        <template v-slot:prepend>
          <q-icon name="store" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <q-input filled v-model="tag" label="Tag(optionnel)">
        <template v-slot:prepend>
          <q-icon name="tag" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section style="margin-bottom: -5%">
      <q-input
        filled
        step="any"
        type="number"
        :rules="[(val) => !!val || 'Ce champ est requis']"
        v-model="prix"
        label="Prix"
      >
        <template v-slot:prepend>
          <q-icon name="payments" />
        </template>
        <template v-slot:append>
          <q-icon name="euro" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section class="q-pb-lg">
      <q-select
        rounded
        outlined
        v-model="typeAchat"
        :options="options"
        label="Type d'achat(optionnel)"
      />
    </q-card-section>

    <div style="text-align: center">
      <q-date v-model="dateA" />
      <q-time v-model="heure" />
    </div>
    <q-card-section>
      <q-btn
        style="width: 100%"
        color="primary"
        label="Enregister"
        @click="addTiquet()"
      />
    </q-card-section>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { date } from "quasar";
import { ref } from "vue";
export default {
  name: "addTiquet",
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const tiquet = ref([]);
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
    const enseigne = ref("");
    const tag = ref("");
    const prix = ref("");
    const typeAchat = ref("");
    const timeStamp = new Date();
    const dateA = date.formatDate(timeStamp, "YYYY/MM/DD");
    const heure = date.formatDate(timeStamp, "HH:mm");
    const addTiquet = () => {
      if (enseigne.value !== "" && prix.value !== "") {
        tiquet.value = {
          enseigne: enseigne.value,
          tag: tag.value,
          prix: parseInt(prix.value),
          typeAchat: typeAchat.value,
          date: dateA,
          heure: heure,
          realTime: timeStamp.getTime(),
        };
        $store.commit("tickets/addTicket", tiquet.value);
      } else {
        $q.notify({
          message: "Des champs n'ont pas été remplis",
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
    return {
      enseigne,
      tag,
      prix,
      typeAchat,
      options,
      dateA,
      heure,
      addTiquet,
    };
  },
};
</script>

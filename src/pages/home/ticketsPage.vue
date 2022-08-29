<template>
  <div>
    <div class="q-gutter-md row items-start q-pl-lg q-pt-lg">
      <q-input
        filled
        v-model="search"
        label="Rechercher"
        maxlength="12"
        style="width: 95%; margin-left: 3%"
      >
        <template v-slot:before>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/img/avatar5.jpg"
              style="
                position: absolute;
                width: 55px;
                height: 55px;
                padding: 10%;
              "
            />
          </q-avatar>
        </template>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <FiltresComp />
          <TriComp />
        </template>
      </q-input>
    </div>
    <div>
      <q-intersection
        class="tiquets"
        v-show="filter().length > 0"
        v-for="(item, index) in filter()"
        :key="index"
        once
        transition="scale"
      >
        <TiquetComp
          :index="index"
          :enseigne="item.enseigne"
          :date="item.date"
          :heure="item.heure"
          :prix="item.prix"
          :tag="item.tag"
        />
      </q-intersection>
    </div>
    <div
      class="no-tiquets"
      style="text-align: center"
      v-show="filter().length === 0"
    >
      <img
        src="../../assets/tiquets.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 20%"
      />
      <div class="text-h4 text-purple-8">Pas de tickets</div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" @click="setCard()" color="purple-9" />
      <q-dialog v-model="card">
        <q-card class="my-card">
          <q-card-section>
            <q-btn
              class="q-mb-lg"
              style="width: 100%; height: 75px; font-size: large"
              color="primary"
              icon="photo_camera"
              label="Prendre une photo"
            />
            <q-btn
              style="width: 100%; height: 75px; font-size: large"
              color="primary"
              icon="upload"
              label="Uploader un ticket"
              @click="setUpload()"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="upload">
        <q-card>
          <q-card-section>
            <q-uploader
              :filter="checkFileType"
              v-model="file"
              @rejected="onRejected"
              label="Custom header"
            >
              <template v-slot:header="scope">
                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                  <q-btn
                    v-if="scope.queuedFiles.length > 0"
                    icon="clear_all"
                    @click="scope.removeQueuedFiles"
                    round
                    flat
                  >
                    <q-tooltip>Clear All</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.uploadedFiles.length > 0"
                    icon="done_all"
                    round
                    flat
                  >
                    <q-tooltip>supprimer le fichier</q-tooltip>
                  </q-btn>
                  <q-spinner
                    v-if="scope.isUploading"
                    class="q-uploader__spinner"
                  />
                  <div class="col">
                    <div class="q-uploader__title">
                      Uploader un fichier ou une image (PNG, JPG, JPEG)
                    </div>
                    <div class="q-uploader__subtitle">
                      {{ scope.uploadSizeLabel }} /
                      {{ scope.uploadProgressLabel }}
                    </div>
                  </div>
                  <q-btn
                    v-if="scope.canAddFiles"
                    type="a"
                    icon="add_box"
                    @click="scope.pickFiles"
                    round
                    flat
                  >
                    <q-uploader-add-trigger />
                    <q-tooltip>Prendre le fichier</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="setInfo()"
                    round
                    flat
                  >
                    <q-tooltip>Uploader Fichier</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.isUploading"
                    icon="clear"
                    @click="scope.abort"
                    round
                    flat
                  >
                    <q-tooltip>stop Upload</q-tooltip>
                  </q-btn>
                </div>
              </template>
            </q-uploader>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="info">
        <q-card class="my-card">
          <AddTiquet />
        </q-card>
      </q-dialog>
    </q-page-sticky>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import TiquetComp from "src/components/tiquetComp.vue";
import AddTiquet from "src/components/addTiquet.vue";
import FiltresComp from "../../components/filtresComp.vue";
import TriComp from "../../components/triComp.vue";
export default {
  setup() {
    // Recherche
    const search = ref("");
    // variables pour la nav
    const $q = useQuasar();
    const file = ref(null);
    const type = ref("");
    const count = ref(1);
    const $store = useStore();
    const card = computed({
      get: () => $store.state.tickets.card,
    });
    const info = computed({
      get: () => $store.state.tickets.info,
    });
    const upload = computed({
      get: () => $store.state.tickets.upload,
    });
    const setCard = () => {
      $store.commit("tickets/setCard", true);
    };
    const setUpload = () => {
      $store.commit("tickets/setUpload", true);
    };
    const setInfo = () => {
      $store.commit("tickets/setInfo", true);
    };
    // const tickets = computed({
    //   get: () => $store.state.tickets.tickets,
    // });
    const filter = () => {
      if ($store.state.tickets.tickets.length === 0) {
        return [];
      }
      return $store.state.tickets.tickets.filter((ticket) =>
        ticket.enseigne.includes(search.value)
      );
    };
    // fonctions
    // const addTiquet = () => {
    //   card.value = false;
    //   upload.value = false;
    //   info.value = false;
    //   file.value = null;
    // };
    const checkFileType = (File) => {
      if (
        File[0].type === "image/png" ||
        File[0].type === "image/jpg" ||
        File[0].type === "image/jpeg"
      ) {
        file.value = File;
        return File;
      } else {
        return "text/plain";
      }
    };

    const onRejected = () => {
      $q.notify({
        type: "negative",
        message: `Le format du fichier est invalide`,
        actions: [
          {
            label: "OK",
            color: "white",
            handler: () => {},
          },
        ],
      });
    };

    const TakePhoto = () => {};

    return {
      count,
      card,
      upload,
      search,
      TakePhoto,
      onRejected,
      setCard,
      file,
      checkFileType,
      setInfo,
      type,
      info,
      filter,
      setUpload,
      // tickets,
    };
  },
  components: { TiquetComp, AddTiquet, FiltresComp, TriComp },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
</style>

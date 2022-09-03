<template>
  <div>
    <div class="q-gutter-md row items-start q-pl-lg q-pt-lg">
      <q-input
        filled
        label="Rechercher"
        maxlength="12"
        style="width: 95%; margin-left: 3%"
      >
        <template v-slot:before>
          <q-avatar>
            <img
              :src="avatar"
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
          <q-btn
            round
            dense
            flat
            icon="tune"
            color="white"
            class="bg-primary q-mr-sm"
          />
          <q-btn
            round
            dense
            flat
            icon="filter_list"
            color="white"
            class="bg-primary"
          />
        </template>
      </q-input>
    </div>

    <div class="no-tiquets" style="text-align: center" v-show="count === 0">
      <img
        src="../../assets/wallet.png"
        alt="image-shopping"
        style="width: 100%; margin-top: 18%"
      />
      <div class="text-h4 text-purple-8">Pas de carte de fidélité</div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="purple-9" @click="setViewer()" />
      <q-dialog v-model="viewer"> <TakePhoto /> </q-dialog>
    </q-page-sticky>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import TakePhoto from "src/components/takePhoto.vue";
export default {
  setup() {
    const $store = useStore();
    const avatar = ref($store.state.user.user.avatar);
    const viewer = computed({
      get: () => $store.state.wallet.PhotoViewer,
      set: (val) => {
        $store.commit("wallet/setStatus", val);
      },
    });

    const count = ref(0);
    const setViewer = () => {
      $store.commit("wallet/setViewer");
    };
    return {
      setViewer,
      viewer,
      avatar,
      count,
    };
  },
  components: { TakePhoto },
};
</script>
<style></style>

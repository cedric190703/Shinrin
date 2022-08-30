<template>
  <div>
    <q-btn
      push
      color="primary"
      text-color="white"
      round
      icon="arrow_back"
      @click="setElement('')"
    />
    <q-toolbar>
      <q-btn
        push
        color="primary"
        text-color="white"
        round
        icon="tune"
        style="position: absolute; right: -2%; top: -10%"
      />
      <q-tabs
        v-model="tab"
        style="width: 100%"
        indicator-color="purple-8"
        class="text-primary"
      >
        <q-tab name="QR" icon="qr_code_2" style="width: 100%" />
        <q-tab name="code_barre" icon="code" style="width: 100%" />
      </q-tabs>
    </q-toolbar>
    <q-page>
      <div class="QR" v-show="tab === 'QR'">
        <div class="row justify-center q-gutter-sm">
          <q-intersection
            v-for="index in 10"
            :key="index"
            transition="scale"
            once
            class="example-item"
          >
            <q-card class="q-ma-sm">
              <img
                style="width: 60%; margin-left: 20%"
                src="https://www.pngmart.com/files/10/Qr-Code-Transparent-PNG.png"
              />

              <q-card-section class="row" style="width: 100%">
                <q-card-section>
                  <div class="text-h6">Carrefour</div>
                  <div class="text-subtitle2">28/08/2022</div>
                </q-card-section>
                <q-card-section style="position: absolute; right: 0; top: 30%">
                  <q-btn
                    side
                    icon="more_vert"
                    color="primary"
                    text-color="white"
                  ></q-btn>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-intersection>
        </div>
      </div>
      <div class="code_barre" v-show="tab === 'code_barre'">
        <div class="row justify-center q-gutter-sm">
          <q-intersection
            v-for="index in 10"
            :key="index"
            transition="scale"
            once
            class="example-item"
          >
            <q-card class="q-ma-sm">
              <img
                style="width: 70%; margin-left: 15%; padding-top: 25px"
                src="https://th.bing.com/th/id/OIP.U21XQCllrw6xEooTEXH9UQHaEE?pid=ImgDet&w=1280&h=704&rs=1"
              />

              <q-card-section class="row" style="width: 100%">
                <q-card-section>
                  <div class="text-h6">Carrefour</div>
                  <div class="text-subtitle2">28/08/2022</div>
                </q-card-section>
                <q-card-section style="position: absolute; right: 0; top: 30%">
                  <q-btn
                    side
                    icon="more_vert"
                    color="primary"
                    text-color="white"
                  ></q-btn>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-intersection>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "QRComp",
  setup() {
    const $store = useStore();
    const tab = ref("QR");
    const setElement = (element) => {
      $store.commit("user/setElement", element);
    };
    return {
      tab,
      setElement,
    };
  },
};
</script>

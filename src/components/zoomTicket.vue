<template>
  <div>
    <q-btn
      style="position: absolute; right: 6%"
      icon="close"
      color="negative"
      text-color="white"
      round
      @click="close()"
    />
    <img
      style="width: 100%"
      src="https://s3-media2.fl.yelpcdn.com/bphoto/L9LaHNv2HjaUkW0VFqU9Nw/o.jpg"
      alt="ticket-image"
    />
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();
    const close = () => {
      $store.commit("tickets/zoomTicket");
    };
    return {
      close,
    };
  },
};
</script>

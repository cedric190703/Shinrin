<template>
  <div>
    <video class="full-width" autoplay ref="videoplay"></video>
  </div>
</template>
<script>
export default {
  name: "takePhoto",
  methods: {
    getPhoto() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((MediaStream) => {
          console.log(MediaStream);
          this.$ref.videoplay.srcObject = MediaStream;
        });
    },
  },
  mounted() {
    console.log("here");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Nous ne pouvons pas utiliser la caméra de votre appareil");
      return;
    } else {
      this.getPhoto();
    }
  },
};
</script>
<style lang=""></style>

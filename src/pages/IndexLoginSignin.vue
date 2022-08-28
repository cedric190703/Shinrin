<template>
  <div>
    <ShinrinLogo />
    <q-item class="column">
      <q-btn to="/Login" class="bg-primary text-white q-mb-lg" id="connexion">
        Connexion
      </q-btn>
      <q-btn to="/Sign" id="inscription"> Inscription </q-btn>
    </q-item>
  </div>
</template>
<script>
import ShinrinLogo from "src/components/ShinrinLogo.vue";
export default { components: { ShinrinLogo } };
</script>
<style>
#connexion,
#inscription {
  border-radius: 15px;
  height: 70px;
  font-size: large;
}

#inscription {
  color: #2d0041;
}
#connexion {
  margin-top: 15%;
}
</style>

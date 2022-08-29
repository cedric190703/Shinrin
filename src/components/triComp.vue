<template>
  <div>
    <q-btn-dropdown
      round
      flat
      dropdown-icon="filter_list"
      color="white"
      class="bg-primary q-mr-sm"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>Trier :</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-avatar icon="payments" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Prix</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-avatar icon="store" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Enseigne</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-avatar icon="shopping_cart" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Type de produit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-avatar icon="calendar_month" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Date</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

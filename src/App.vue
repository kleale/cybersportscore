<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
import NavBar from './components/layout/NavBar.vue'
import Branding from './components/layout/Branding.vue'
import BnrCatFish from './components/layout/bnrCatFish.vue';
</script>

<template>
  <Branding />
  <BnrCatFish />
  
  <div class="max-w-6xl relative flex flex-col" style="margin: 0 auto">
    <NavBar />
    <RouterView />
    <div class="p-3 max-w-6xl bg-gray-800" style="margin: 0 auto">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
</style>

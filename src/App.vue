<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
import NavBar from './components/layout/NavBar.vue'
</script>

<template>
  <div class="max-w-6xl relative" style="margin: 0 auto">
    <noindex>
      <a rel="nofollow" class="abr yaadstracker" target="_blank" href="#" id="esn-01"
        style="background-image:url(https://escorenews.com/media/a/banner189.gif)">
      </a>
      <a rel="nofollow" class="abr abr2 yaadstracker" target="_blank" href="#" id="esn-01"
        style="background-image:url(https://escorenews.com/media/a/banner189.gif)">
      </a>
    </noindex>
  </div>
  <NavBar />
  <RouterView />
  <Footer />
  

</template>

<style scoped>
a.abr {
  position: absolute;
left: 100%;
top: 66px;
overflow: hidden;
background: #f70000 url(/img/dummy/banner_bg.jpg) 0;
  background-position-x: 0px;
  background-position-y: center;
  background-repeat: repeat;
  background-image: url("/img/dummy/banner_bg.jpg");
  background-size: auto;
background-position-x: 0px;
background-position-y: center;
background-repeat: repeat;
background-image: url("/img/dummy/banner_bg.jpg");
background-size: auto;
background-size: contain;
width: 290px;
border-radius: 8px;
background-repeat: no-repeat;
background-position: top;
height: 1000px;
}
a.abr.abr2{
  left: auto;
  right: 100%;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigationBar from '@/components/navBar.vue';
</script>


<template>
  <div id="main">
    <navigationBar></navigationBar>
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style>

body{
  height: 100%;
  margin: 0;
  padding: 0;
  background: #4b79a1;
  background: -webkit-linear-gradient(to top,
      #283e51,
      #0a2342);
  background: linear-gradient(to top,
      #283e51,
      #0a2342);
  background: -olinear-gradient(to top, #283e51, #0a2342);
  color: white;
}

#main {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.content-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

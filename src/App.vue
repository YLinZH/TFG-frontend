<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigationBar from '@/components/nav.vue';
</script>

<template>
    <div class='stars'></div>
    <navigationBar class="navigation"></navigationBar>
    <RouterView />
</template>

<style>

body{
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #4b79a1; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #283e51,
    #0a2342
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #283e51,
    #0a2342
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: -olinear-gradient(to top, #283e51, #0a2342);
  color: white;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
    repeat top center;
  z-index: -1111;
}

.navigation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
}
</style>

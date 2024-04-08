<template>
  <div>
    <div id="container">
      <div class="wrapper">
        <div class="grow-text">
          404 Not Found
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.grow-text {
  width: 13ch;
  animation: grow 2s steps(13), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
  font-family: monospace;
  font-size: 6em;
  color: white;
}

@keyframes grow {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@media only screen and (max-width: 540px) {
  .grow-text {
    width: 13ch;
    animation: grow 2s steps(13), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid white;
    font-family: monospace;
    font-size: 2em;
    color: white;
  }

}

</style>
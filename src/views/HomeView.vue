<template>
  <div class="vh-100 d-flex align-items-center justify-content-center">
    <div class="text-center">
      <h1>Welcome to AIAccessibility</h1>
      <p>There are two significant AI applications for the accessibility: 
        <strong><RouterLink class="inline-link" to="/manualAIRedactor">AI Redactor</RouterLink></strong> & 
        <strong><RouterLink class="inline-link" to="/manualAISceneGenerator">AI Scene Generator</RouterLink></strong>.</p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.inline-link {
  display: inline-block;
  margin-right: 8px; 
}
</style>

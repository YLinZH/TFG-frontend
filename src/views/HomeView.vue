<template>
  <div class="vh-100 d-flex align-items-center justify-content-center">
    <div class="text-center">
      <h1>Welcome to AIAccessibility</h1>
      <p class="description">There are the manuals of my AI applications for the accessibility: 
        <strong><RouterLink class="inline-link" to="/manualAIRedactor">Manual of AI Redactor</RouterLink></strong> & 
        <strong><RouterLink class="inline-link" to="/manualAISceneGenerator">Manual AI Scene Generator</RouterLink></strong>.</p>
        <p class="privacity">
          We assure you that we do not store any private data. The information provided by users is securely transmitted to ChatGPT.
        </p>
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
.description{
  font-size: 20px;
}
.privacity{
  font-size: 20px;
}
</style>

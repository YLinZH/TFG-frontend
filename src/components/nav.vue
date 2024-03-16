<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a style="color: white;" class="navbar-brand" href="/">AIAccessibility</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/AIRedactor">AI Redactor</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/AIxxx">AI xxx</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.router-link-active{
    font-weight: bold;
    background-color: #666;
    border-radius: 10px;
}
.nav-item{
    margin-right: 10px;
}
.nav-item:hover{
    background-color: #999;
    border-radius: 10px;
}

.nav-link{
    color: white;
}

</style>
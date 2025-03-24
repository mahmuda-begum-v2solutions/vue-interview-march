<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" class="link">
        Home
      </RouterLink>
      <RouterLink to="/about" class="link">
        About
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 0.875rem;
}

.link {
  padding: 0.75rem 1.5rem;
  color: #4a4a4a;
  text-decoration: none;
}

.link:hover {
  color: #1a1a1a;
}
</style>

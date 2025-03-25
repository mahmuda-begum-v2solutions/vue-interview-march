<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full max-h-screen flex flex-col items-center py-8">
    <nav class="w-full flex justify-center gap-12 text-sm">
      <RouterLink to="/" class="px-6 py-3 text-gray-700 no-underline hover:text-gray-900">
        Home
      </RouterLink>
      <RouterLink to="/about" class="px-6 py-3 text-gray-700 no-underline hover:text-gray-900">
        About
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

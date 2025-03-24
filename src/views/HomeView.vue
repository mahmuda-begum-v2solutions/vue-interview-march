<script setup lang="ts"></script>

<template>
  <main class="main">
    <h1 class="title">This is home page</h1>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.title {
  font-size: 1.5rem;
  /* Equivalent to text-2xl */
  font-weight: bold;
  color: red;
  /* Equivalent to text-red-500 */
}
</style>

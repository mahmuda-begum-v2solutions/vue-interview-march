<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFirstStore } from '@/stores/firststore';

const store = useFirstStore()

// const searchL = ref<string>("")

const nextFn = () => {
  store.checkWeatherList()
  setTimeout(() => {
    store.callWeatherFromLocation()
  }, 1000);
}


</script>

<template>
  <!-- h-96 overflow-auto -->
  <main class="flex items-center flex-col gap-col-3  min-h-screen  w-full max-w-4xl  m-auto bg-teal-50">
    <h1 class="text-2xl font-bold">Weather App</h1>
    <div class="flex flex-col gap-y-2 border border-gray-500">
      <input type="text" placeholder="Search Location" v-model="store.searchText" />
      <button @click="nextFn">search</button>
    </div>

  </main>
</template>

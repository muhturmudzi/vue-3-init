<script setup>
import Header from '@/components/layouts/Header.vue'
</script>

<template>
  <div class="bg-[#EEEEEE] pb-24">
    <Header />

    <main class="box container mt-8 max-w-2xl mx-auto min-h-screen">
      <router-view></router-view>
    </main>
  </div>
</template>
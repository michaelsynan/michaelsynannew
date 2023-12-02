<template>
    <NuxtLayout name="404">
      <div class="errorSection flex justify-center items-center flex-col h-screen">
        <h1 class="text-6xl">404</h1>
                <h2>
                    <strong>{{ error.message }}</strong>
                </h2>
                <p class="mb-4">It looks like you found a glitch in the matrix...</p>
                <Btn msg="home" :icon="false" to="/" />
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  definePageMeta({
    layout: "404",
  });
  
  const router = useRouter();
  </script>
  
  <style scoped></style>
  
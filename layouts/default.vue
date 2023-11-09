<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center min-h-screen h-full w-full">
    <MainNav class="fixed" />
    <div class="px-2 w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>

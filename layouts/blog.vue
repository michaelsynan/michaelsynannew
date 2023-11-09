<script lang="ts" setup></script>

<template>
  <div class="w-full bg-gradient flex flex-col min-h-screen prose h-max max-w-none bg-zinc-900 prose-invert">
    Layout: blog
    <div class="mx-auto xs:w-11/12 sm:w-11/12 md:w-2/5 p-5 md:p-10 mx-auto mt-20 prose-lg bg-zinc-900 mb-10 drop-shadow-sm">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>

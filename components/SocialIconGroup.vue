<template>
  <section role="region" aria-label="Social Links" class="text-stone-200 relative">
    <div class="flex items-start">
      <nuxt-link to="https://mstdn.social/@letsbecomehuman" target="_blank" title="Mastodon">
        <i-mdi-mastodon :class="iconSizeClass" />
        <span class="sr-only">Mastodon</span>
      </nuxt-link>
      <nuxt-link to="https://github.com/michaelsynan" target="_blank" title="GitHub">
        <i-mdi-github :class="iconSizeClass" />
        <span class="sr-only">GitHub</span>
      </nuxt-link>
      <nuxt-link to="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank" title="LinkedIn">
        <i-mdi-linkedin :class="iconSizeClass" class="!mr-0"/>
        <span class="sr-only">LinkedIn</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  small: Boolean
});

const iconSizeClass = computed(() => ({
  'inline mr-4 text-stone-200 hover:text-stone-300': true,
  'text-xl': props.small, 
  'text-2xl': !props.small 
}));
</script>

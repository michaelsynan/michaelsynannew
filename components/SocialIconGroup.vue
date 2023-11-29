<template>
  <div class="text-stone-200 relative">
    <section role="region" aria-label="Social Links">
      <div class="flex items-start">
        <nuxt-link to="https://mstdn.social/@letsbecomehuman" target="_blank" title="Mastodon">
          <i-mdi-mastodon :class="iconSizeClass" />
          <span class="sr-only">Mastodon</span>
        </nuxt-link>
        <a href="https://github.com/michaelsynan" target="_blank" title="GitHub">
          <i-mdi-github :class="iconSizeClass" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank" title="LinkedIn">
          <i-mdi-linkedin :class="iconSizeClass" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define the 'small' prop
const props = defineProps({
  small: Boolean
});

// Computed property to adjust icon size
const iconSizeClass = computed(() => ({
  'inline mr-4 text-stone-200 hover:text-stone-300': true,
  'text-xl': props.small, // smaller size for 'small' prop
  'text-2xl': !props.small // default size
}));
</script>

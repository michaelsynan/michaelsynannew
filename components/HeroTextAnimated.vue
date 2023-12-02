<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const props = defineProps({
  quote: String,
});

const words = ref(props.quote.split(' '));
let observer;

onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-delay');
            }, index * 250);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const quoteWords = ref(document.querySelectorAll('.quoteWord'));
    quoteWords.value.forEach((word) => {
      observer.observe(word);
    });
  }, 150); 
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="quoteContainer z-10">
    <span v-for="(word, index) in words" :key="index" class="quoteWord mb-3 md:mb-8 text-4xl md:text-7xl z-10 !font-sans">
      {{ word + '&nbsp' }}
    </span>
  </div>
</template>


<style scoped>
.quoteWord {
  opacity: 0;
  display: inline-block;
}
.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

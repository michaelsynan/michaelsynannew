<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <!-- Vertically and horizontally centered message -->
      <transition name="fade-in" mode="out-in">
        <div key="message" class="text-center text-3xl tracking-wide" v-if="showMessage">{{ msg }}</div>
      </transition>
    </div>
    <!-- Responsive input container -->
    <div class="w-full px-4 pb-10 md:w-2/3 lg:w-1/2 mx-auto relative">
      <!-- Message box with dynamic height, positioned to sit above the input -->
      <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
        <div v-if="yourMsg" class="bg-opacity-10 p-4 rounded-lg">You: {{ yourMsg }}</div>
      </div>
      <input v-model="inputMessage" @keyup.enter="updateYourMsg"
             class="w-full p-3 rounded-lg bg-opacity-10 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             placeholder="Type your message..." />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

definePageMeta({ layout: 'default' });

const msg = ref("Let's start your project today."); 
const yourMsg = ref("");  // Corrected typo in the initial message
const showMessage = ref(true);
const inputMessage = ref("");  // Added to bind with the input field

// Function to update yourMsg when Enter is pressed
const updateYourMsg = () => {
  yourMsg.value = inputMessage.value;
  inputMessage.value = "";  // Clear the input field after updating
};

// Handle automatic message change after a few seconds
setTimeout(() => {
  msg.value = "How can I help you?";
}, 2500);

// Watch the msg reactive reference for changes
watch(msg, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    showMessage.value = false;
    nextTick(() => {
      setTimeout(() => {
        showMessage.value = true;
      }, 100);
    });
  }
}, { immediate: true });

useHead({
  title: "About",
  meta: [{ name: 'description', content: 'I\'m into programming, jazz and chess. Check out my awesome links!' }],
});
</script>

<style>
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.5s;
}
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}
</style>

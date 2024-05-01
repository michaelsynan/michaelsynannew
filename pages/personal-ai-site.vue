<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <!-- Container for messages -->
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto p-4"> <!-- Ensure full width within max-w-4xl and center it -->
        <transition name="fade-in" mode="out-in">
          <!-- Separate div for "Thinking..." which does not use the transition -->
          <div v-if="thinking" class="text-left text-xl tracking-wide w-full">Thinking{{dots}}</div>
          <!-- Original message div controlled by showMessage -->
          <div v-else key="message" class="text-left text-xl tracking-wide w-full">{{ msg }}</div>
        </transition>
      </div>
    </div>
    <!-- Responsive input container -->
    <div class="w-full px-4 pb-10 md:w-2/3 lg:w-1/2 mx-auto relative">
      <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
        <div v-if="yourMsg" class="bg-opacity-10 p-4 rounded-lg">You: {{ yourMsg }}</div>
      </div>
      <input v-model="inputMessage" @keyup.enter="sendYourMsg"
             class="w-full p-3 rounded-lg bg-opacity-10 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             placeholder="Type your message..." />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({ layout: 'default' });

const msg = ref("Let's start your project today.");
const yourMsg = ref("");
const inputMessage = ref("");
const thinking = ref(false);
const dots = ref('');

// Function to update "Thinking..." dots smoothly
function updateDots() {
  let dotCount = 0;
  const maxDots = 3;
  return setInterval(() => {
    dotCount = (dotCount % maxDots) + 1;
    dots.value = '.'.repeat(dotCount);
  }, 500);
}

// Function to send message to the server and handle the response
const sendYourMsg = async () => {
  yourMsg.value = inputMessage.value;  // Capture the user's input
  thinking.value = true;  // Show the thinking text
  const dotInterval = updateDots();  // Start updating dots

  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: yourMsg.value,
      sessionId: sessionStorage.getItem('openaiSessionId')  // Pass the session ID if available
    })
  });

  clearInterval(dotInterval);  // Stop updating dots
  thinking.value = false;  // Hide the thinking text
  const { text, sessionId } = await response.json();
  msg.value = text;  // Update the message displayed to the user
  sessionStorage.setItem('openaiSessionId', sessionId);  // Save the new session ID
  inputMessage.value = "";  // Clear the input field
};

// Initial message change after a few seconds only once on component mount
onMounted(() => {
  setTimeout(() => {
    if (msg.value === "Let's start your project today.") {
      msg.value = "How can I help you?";
    }
  }, 2500);
});

useHead({
  title: "About",
  meta: [{ name: 'description', content: 'I’m into programming, jazz, and chess. Check out my awesome links!' }],
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

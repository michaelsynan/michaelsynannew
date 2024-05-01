<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto p-4">
        <transition name="fade-in" mode="out-in">
          <div v-if="thinking" class="text-left text-xl tracking-wide w-full">Thinking{{dots}}</div>
          <div v-else key="message" class="text-left text-xl tracking-wide w-full">{{ msg }}</div>
        </transition>
        <!-- Conditionally render the email div below the message -->
        <div v-if="includesEmail" class="mt-6 ">
    <a :href="`mailto:${email}`" class="p-2 bg-gradient-to-br from-teal-800 to-teal-600 border-1 cursor-pointer border-opacity-20 border-teal-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
      {{ email }}
    </a>
  </div>
      </div>
    </div>
    <div class="w-full px-4 pb-10 md:w-2/3 lg:w-1/2 mx-auto relative">
      <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
        <div v-if="yourMsg" class="bg-opacity-10 p-4 rounded-lg">You: {{ yourMsg }}</div>
      </div>
      <input v-model="inputMessage" @keyup.enter="sendYourMsg"
             class="w-full p-2 rounded-lg bg-opacity-10 bg-gray-800 placeholder-gray-500 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             placeholder="Type your message..." />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';

definePageMeta({ layout: 'default' });

const msg = ref("Let's start your project today.");
const yourMsg = ref("");
const inputMessage = ref("");
const thinking = ref(false);
const dots = ref('');
const email = "hello@michaelsynan.com"; // Your email as a constant

// Computed property to detect if the message includes the email
const includesEmail = computed(() => msg.value.includes(email));

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

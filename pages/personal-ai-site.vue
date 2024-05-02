<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <div class="w-full md:w-2/3 lg:w-2/5 mx-auto p-4">
        <transition name="fade-in" mode="out-in">
  <!-- Display when thinking -->
  <div v-if="thinking" class="text-left text-xl tracking-wide w-full">Thinking{{dots}}</div>
  
  <!-- Display as the initial message -->
  <div v-else-if="isInitialMessage" key="initialMessage" class="text-left text-xl tracking-wide w-full">
    {{ initialMsg }}
  </div>

  <!-- Default message display -->
  <div v-else key="message" class="text-left text-base md:text-xl tracking-wide w-full leading-10">
    {{ msg }}
  </div>
</transition>
        <!-- Conditionally render the email div below the message -->
  <div v-if="includesEmail" class="mt-6 ">
    <a :href="`mailto:${email}`" class="p-2 bg-gradient-to-br from-teal-800 to-teal-600 border-1 cursor-pointer border-opacity-20 border-teal-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
      {{ email }}
    </a>
  </div>
  <div v-if="includesLinkedin" class="mt-6">
          <a :href="linkedin" class="p-2 bg-gradient-to-br from-cyan-800 to-cyan-600 border-1 cursor-pointer border-opacity-20 border-cyan-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
            Visit my LinkedIn
          </a>
        </div>
        <div v-if="includesCalendly" class="mt-6">
        <a :href="calendlyLink" class="p-2 bg-gradient-to-br from-purple-800 to-purple-600 border-1 cursor-pointer border-opacity-20 border-purple-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
          Schedule a Call
        </a>
      </div>
      </div>
    </div>
    <div class="w-full px-4 pb-4 md:pb-10 md:w-2/3 lg:w-2/5 mx-auto relative">
  <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
    <div v-if="yourMsg" class="bg-opacity-10 p-4 rounded-lg">You: {{ yourMsg }}</div>
  </div>
  <div class="input-wrapper flex items-center p-2 bg-opacity-10 bg-gray-800 rounded-lg border border-opacity-20 border-stone-600">
    <input v-model="inputMessage" @keyup.enter="sendYourMsg"
           class="w-full bg-transparent placeholder-gray-500 text-white border-none"
           placeholder="Type your message..." />
    <button @click="sendYourMsg" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded opacity-50">
      Send
    </button>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

definePageMeta({ layout: 'default' });

const msg = ref("Let's start your project today.");
const initialMsg = ref("Welcome! How can I assist you today?");  
const isInitialMessage = ref(true);  
const yourMsg = ref("");
const inputMessage = ref("");
const thinking = ref(false);
const dots = ref('');
const email = "hello@michaelsynan.com"; 
const linkedin = "https://www.linkedin.com/in/hellomichaelsynan/"; 
const includesLinkedin = computed(() => msg.value.includes(linkedin));
const includesEmail = computed(() => msg.value.includes(email));
const calendlyLink = "https://calendly.com/michaelsynan";  
const includesCalendly = computed(() => msg.value.toLowerCase().includes('calendly') || msg.value.toLowerCase().includes('schedule'));


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
  if (isInitialMessage.value) {
    isInitialMessage.value = false;  // Toggle the initial message state off after the first interaction
  }
  yourMsg.value = inputMessage.value;
  thinking.value = true;
  const dotInterval = updateDots();

  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: yourMsg.value,
      sessionId: sessionStorage.getItem('openaiSessionId')
    })
  });

  clearInterval(dotInterval);
  thinking.value = false;
  const { text, sessionId } = await response.json();
  msg.value = text;
  sessionStorage.setItem('openaiSessionId', sessionId);
  inputMessage.value = "";
};

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

.input-wrapper:focus-within {
  outline: none;
  box-shadow: 0 0 0 2px #3182ce; /* Focus ring color */
  border-color: transparent;
}
.input-wrapper input:focus {
  outline: none; /* Removes default focus outline from the input element */
}

</style>

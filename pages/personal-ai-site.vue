<template>
  <div class="flex flex-col justify-center items-center text-stone-100 min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <div class="w-full md:w-2/3 lg:w-2/5 mx-auto p-4">
        <transition name="fade-in" mode="out-in">
          <div key="message" class="text-left text-xl md:text-2xl tracking-wide w-full !leading-normal border-stone-800 border-opacity-50 border bg-stone-900 p-4 rounded-lg shadow-md mb-24 md:mb-10 mt-20 md:mt-10">          
            <span class="block text-xl pb-2 font-semibold text-stone-500 tracking-wide ">Assistant</span>
          <template v-if="thinking">
            Thinking{{dots}}
          </template>
          <template v-else-if="isInitialMessage">
            {{ initialMsg }}
          </template>
          <template v-else>
            <div v-html="$md.render(model)" ></div>
          </template>
        </div>
        </transition>

              </div>
            </div>
        <div class="w-full px-4 pb-4 md:pb-10 md:w-2/3 lg:w-2/5 mx-auto relative">
        <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
          <div v-if="yourMsg" class="bg-opacity-10 p-3 rounded-lg">You: {{ yourMsg }}</div>
        </div>
         <div class="input-wrapper flex items-center py-2 px-2 bg-opacity-10 bg-gray-800 rounded-lg border border-opacity-20 border-stone-400">
        <input v-model="inputMessage" @keyup.enter="sendYourMsg"
              class="w-full bg-transparent placeholder-stone-500 text-stone-100 border-none px-2"
              placeholder="Type your message..." />
        <button @click="sendYourMsg" class="ml-2 bg-teal-500 hover:bg-teal-400 text-stone-100 font-bold py-1.5 px-3 rounded">
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
const initialMessages = [
  "Artificial Intelligence is just getting started. Want to incorporate it in your project?",
  "Discover the potential of AI in your next project. Let's talk!",
  "Ready to transform your business with AI? Get in touch today!",
  "Enhance your digital solutions with cutting-edge AI technology.",
  "Explore how AI can elevate your business operations. Contact us!",
  "Leverage AI for innovative solutions in your projects.",
  "AI is the future. Start integrating it into your business now!",
  "Unleash the power of AI and see your productivity soar.",
  "Interested in AI-driven solutions? We can help!",
  "Harness the capabilities of AI for a competitive edge in your industry."
];

// Randomly select an initial message when the component mounts
const initialMsg = ref("");
onMounted(() => {
  initialMsg.value = initialMessages[Math.floor(Math.random() * initialMessages.length)];
});

const isInitialMessage = ref(true);  
const yourMsg = ref("");
const inputMessage = ref("");
const thinking = ref(false);
const dots = ref('');


const model = computed(() => msg.value);

function updateDots() {
  let dotCount = 0;
  const maxDots = 3;
  return setInterval(() => {
    dotCount = (dotCount % maxDots) + 1;
    dots.value = '.'.repeat(dotCount);
  }, 500);
}

const sendYourMsg = async () => {
  if (isInitialMessage.value) {
    isInitialMessage.value = false;  
  }
  yourMsg.value = inputMessage.value;
  inputMessage.value = '';
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
  title: "Personal AI Assistant & Agent",
  meta: [{ name: 'description', content: "Artificial Intelligence and AI Agents are here to stay. In this demo you can explore Michael's AI assistant to learn about him and the technology" }],
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
  box-shadow: 0 0 0 2px #14B8A6; 
  border-color: transparent;
}
.input-wrapper input:focus {
  outline: none; 
}
</style>

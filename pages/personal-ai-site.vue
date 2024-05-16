<template>
  <div class="flex flex-col justify-center items-center text-stone-100 min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <div class="w-full md:w-2/3 lg:w-2/5 mx-auto p-4 relative">
        <div class="absolute top-0 right-0 md:relative cursor-pointer">
          <select v-model="selectedDemo" @change="onDemoChange" class="bg-stone-900 border border-stone-800 border-opacity-50 shadow text-stone-100 p-2 rounded ">
            <option value="regular">Regular Chat</option>
            <option value="embeddings">Embeddings Chat</option>
          </select>
        </div>
        <div class="text-left text-xl md:text-2xl tracking-wide w-full !leading-normal border-stone-800 border-opacity-50 border bg-stone-900 p-4 rounded-lg shadow mb-24 md:mb-10 mt-20 md:mt-10">
          <span class="block text-xl pb-3 font-semibold text-stone-500 tracking-wide flex justify-between items-center">
  Assistant
  <span class="cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
    </svg>
  </span>
</span>

          <transition name="fade-in" mode="out-in">
            <div :key="msgKey">
              <template v-if="thinking">
                Thinking{{dots}}
              </template>
              <template v-else-if="isInitialMessage">
                {{ initialMsg }}
              </template>
              <template v-else>
                <template v-if="selectedDemo === 'embeddings'">
                  <div>Chat with embeddings coming soon...</div>
                </template>
                <template v-else>
                  <div v-html="$md.render(model)" class="leading-relaxed"></div>
                </template>
              </template>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="w-full px-4 pb-4 md:pb-10 md:w-2/3 lg:w-2/5 mx-auto relative">
      <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
        <div v-if="yourMsg" class="bg-opacity-10 p-3 rounded-lg">You: {{ yourMsg }}</div>
      </div>
      <div class="input-wrapper flex items-center py-2 px-2 bg-opacity-10 bg-gray-800 rounded-lg border border-opacity-20 border-stone-400">
        <input v-model="inputMessage" @keyup.enter="sendYourMsg" class="w-full bg-transparent placeholder-stone-500 text-stone-100 border-none px-2" placeholder="Type your message..." />
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

const initialMsg = ref("");
onMounted(() => {
  initialMsg.value = selectedDemo.value === 'embeddings' ? "Welcome to embeddings chat!" : initialMessages[Math.floor(Math.random() * initialMessages.length)];
});

const isInitialMessage = ref(true);  
const yourMsg = ref("");
const inputMessage = ref("");
const thinking = ref(false);
const dots = ref('');
const msgKey = ref(0);
const selectedDemo = ref('regular');

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
  msgKey.value++; // Update the key to trigger the transition for "Thinking..."
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
  msg.value = ''; // Clear the message content to avoid brief flash of old message
  msgKey.value++; // Update the key to trigger the transition for new message

  const { text, sessionId } = await response.json();
  msg.value = text;
  sessionStorage.setItem('openaiSessionId', sessionId);
  inputMessage.value = "";
};

const onDemoChange = () => {
  initialMsg.value = selectedDemo.value === 'embeddings' ? "Welcome to embeddings chat!" : initialMessages[Math.floor(Math.random() * initialMessages.length)];
  model.value = '';
  yourMsg.value = '';
  isInitialMessage.value = true;
  msgKey.value++;
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

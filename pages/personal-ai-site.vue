<template>
  <div class="flex flex-col justify-center items-center text-stone-100 min-h-screen">
    <!-- Overlay and Modal -->

    <!-- Main Content -->
    <div class="flex-grow w-full flex items-center justify-center relative z-10">
      <div class="w-full md:w-2/3 lg:w-2/5 mx-auto p-4">
        <transition name="fade-in">
  <div ref="modalRef" v-if="open" class="modal-content">
    <div class="w-full p-4 rounded-lg shadow mt-4 mb-4 bg-stone-700 border-stone-500 border-opacity-50 border">
      <div class="text-xlxl flex flex-col items-center relative">
        <div class="p-2 !text-left leading-relaxed w-full text-stone-200">{{ modelDescription }}</div>
      </div>
    </div>
  </div>
</transition>


        <div class="text-left text-xl md:text-2xl tracking-wide w-full leading-normal border-stone-600 border-opacity-50 border bg-stone-900 p-4 rounded-lg shadow mt-4 mb-4">
          <span class="block text-xl pb-3 font-semibold text-stone-500 tracking-wide flex justify-between items-center">
            AI Assistant
    
         
  <span 
    @click="open = !open" 
    class="cursor-pointer transition-colors duration-100 hover:text-teal-700" 
    :class="{ 'text-teal-600': open }">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  </span>

          </span>
          <transition name="fade-in" mode="out-in" class="prose text-stone-200">
            <div :key="msgKey">
              <template v-if="thinking">Thinking{{ dots }}</template>
              <template v-else-if="isInitialMessage">{{ initialMsg }}</template>
              <template v-else>
                <template v-if="selectedDemo === 'embeddings'">
                  <div>Chat with embeddings coming soon...</div>
                </template>
                <template v-else>
                  <div v-html="$md.render(model)" class="leading-relaxed prose"></div>
                </template>
              </template>
            </div>
          </transition>
        </div>
        <div class="cursor-pointer">
          <select v-model="selectedDemo" @change="onDemoChange" class="bg-stone-900 border border-stone-600 border-opacity-50 shadow text-stone-100 p-2 rounded text-sm">
            <option value="context">Contextual Chat</option>
            <option value="embeddings">Embeddings Chat</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- Additional Content -->
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
import { ref, onMounted, onUnmounted, computed } from 'vue';

definePageMeta({ layout: 'default' });
const open = ref(false);  
const selectedModel = ref('context');  
const descriptions = ref({
  context: "This is the contextual chat description, tailored for interactions requiring explicit context.",
  embeddings: "This is the embedding-based chat description, focused on utilizing embeddings to understand and respond to inputs."
});


const modelDescription = computed(() => {
  return descriptions.value[selectedModel.value];
});

const modalRef = ref(null);
const handleClickOutside = event => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    open.value = false;
  }
};
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});


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
const selectedDemo = ref('context');

/* embeddings stuff */


const embeddings = ref([]);

onMounted(() => {
  const { data, error } = useFetch('/quotes_embeddings.json', {
    method: 'GET',
    responseType: 'json'
  });

  // Watch for data changes and update the embeddings ref
  watchEffect(() => {
    if (data.value) {
      embeddings.value = data.value;
      console.log('Embeddings loaded:', embeddings.value);
    }
    if (error.value) {
      console.error('Error loading embeddings:', error.value);
    }
  });
});
/* end embeddings stuff */

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

  // Determine the API endpoint based on the selected demo
  const apiEndpoint = selectedDemo.value === 'embeddings' ? '/api/openai_embeddings' : '/api/openai';

  const response = await fetch(apiEndpoint, {
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

.prose a {color: #76448a !important;}
</style>

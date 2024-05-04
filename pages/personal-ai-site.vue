<template>
  <div class="flex flex-col justify-center items-center text-white min-h-screen">
    <div class="flex-grow w-full flex items-center justify-center">
      <div class="w-full md:w-2/3 lg:w-2/5 mx-auto p-4">
        <transition name="fade-in" mode="out-in">
        <div key="message" class="text-left text-xl md:text-2xl tracking-wide w-full !leading-normal bg-stone-900 p-4 rounded-lg shadow-lg">
          <span class="block text-2xl pb-2 font-semibold text-stone-300">Michael's Assistant</span>
          <template v-if="thinking">
            Thinking{{dots}}
          </template>
          <template v-else-if="isInitialMessage">
            {{ initialMsg }}
          </template>
          <template v-else>
            <div v-html="$md.render(model)"></div>
          </template>
        </div>
        </transition>
        <div class="flex gap-4 flex-row">
          <div v-if="includesEmail" class="mt-6 ">
            <a :href="`mailto:${email}`" target="__blank"  class="p-2 bg-gradient-to-br from-teal-800 to-teal-600 border-1 cursor-pointer border-opacity-20 border-teal-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
              {{ email }}
            </a>
          </div>
          <div v-if="includesLinkedin" class="mt-6">
                  <a :href="linkedin" target="__blank" class="p-2 px-3 bg-gradient-to-br from-cyan-800 to-cyan-600 border-1 cursor-pointer border-opacity-20 border-cyan-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
                    LinkedIn
                  </a>
                </div>
                <div v-if="includesCalendly" class="mt-6">
                <a :href="calendlyLink" target="__blank"  class="p-2 px-3 bg-gradient-to-br from-purple-800 to-purple-600 border-1 cursor-pointer border-opacity-20 border-purple-300 text-stone-200 max-w-max rounded-full text-xs shadow-inner">
                  Schedule a Call
                </a>
              </div>
              </div>
              </div>
            </div>
        <div class="w-full px-4 pb-4 md:pb-10 md:w-2/3 lg:w-2/5 mx-auto relative">
        <div id="myMessageBox" class="text-stone-600 absolute bottom-full mb-2 left-0 w-full">
          <div v-if="yourMsg" class="bg-opacity-10 p-3 rounded-lg">You: {{ yourMsg }}</div>
        </div>
         <div class="input-wrapper flex items-center py-2 px-2 bg-opacity-10 bg-gray-800 rounded-lg border border-opacity-20 border-stone-600">
        <input v-model="inputMessage" @keyup.enter="sendYourMsg"
              class="w-full bg-transparent placeholder-gray-500 text-white border-none px-2"
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
const initialMsg = ref("Artificial Intelligence is just getting started. Want to incorporate it in your project?");  
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
  box-shadow: 0 0 0 2px #14B8A6; 
  border-color: transparent;
}
.input-wrapper input:focus {
  outline: none; 
}
</style>

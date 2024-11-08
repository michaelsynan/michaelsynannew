<template>
  <div
    class="flex flex-col flex-grow text-white place-content-start md:place-content-center pb-40 min-h-screen pt-32 md:pt-0">
    <div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/3">
      <section role="region" aria-label="Contact Form Section">
        <form @submit.prevent="sendEmail" class="relative">
          <h2 class="text-2xl md:text-4xl font-bold pt-0 tracking-wider pb-2">Let's Connect</h2>
          <p class="pb-6">Send me a message and I'll get back to you ASAP.</p>

          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-stone-200">Name</label>
            <input type="text" id="name" v-model="form.name" title="Please enter your name." required
              class="mt-1 p-2 block w-full rounded-sm bg-stone-900 bg-opacity-50 text-white border border-stone-700 focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-stone-200">Email</label>
            <input type="email" id="email" title="Please enter a valid email." v-model="form.email" required
              class="mt-1 p-2 bg-opacity-50 block w-full rounded-sm bg-stone-900 text-white border border-stone-700 focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-stone-200">Message</label>
            <textarea id="message" v-model="form.message" rows="4" title="Please enter your message." required
              class="mt-1 p-2 block w-full rounded-sm bg-stone-900 bg-opacity-50 text-white border border-stone-700 focus:ring focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>

          <div class="mt-6">
            <button type="submit" :disabled="isSubmitted"
              class="!font-inter tracking-widest rounded-sm z-10 mb-4 w-full md:w-auto inline-block mr-6 md:mr-8 transition ease-in-out border-2 p-2 px-3 md:p-2 md:px-4 text-sm md:text-base"
              :class="{ 'border-white hover:bg-white hover:!text-[#131721]': !isSubmitted, 'border-gray-400 bg-gray-400 cursor-not-allowed': isSubmitted }">
              <span v-if="loading">Sending</span><span v-else>Submit</span>
            </button>

          </div>

          <!-- Feedback Message -->
          <div v-if="formFeedback.type === 'success'" class="mt-4 p-3 bg-green-500 text-white rounded absolute w-full">
            {{ formFeedback.message }}
          </div>
          <div v-else-if="formFeedback.type === 'error'" class="mt-4 p-3 bg-red-500 text-white rounded absolute w-full">
            {{ formFeedback.message }}
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const mail = useMail();

const form = ref({
  name: '',
  email: '',
  message: '',
});

const showFeedback = ref(false);
const formFeedback = ref({});
const isSubmitted = ref(false); // State to track if the form is submitted
let loading = ref(false);
const sendEmail = async () => {
  try {
    loading.value = true;
    await mail.send({
      from: 'hello@michaelsynan.com',
      subject: 'Contact Form Submission',
      text: `Name: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`,
    });
    formFeedback.value = {
      type: 'success',
      message: 'Your message has been sent successfully!',
    };
    isSubmitted.value = true;
    showFeedback.value = true;
    loading.value = false;
  } catch (error) {
    console.error('Error sending email:', error);
    formFeedback.value = {
      type: 'error',
      message: 'There was an error sending your message. Please try again.',
    };
    showFeedback.value = true;
    loading.value = false;
  }
};

const closeModal = () => {
  showFeedback.value = false;
};

useHead({
  title: "Contact",
  meta: [{ name: 'description', content: 'Get in touch with me through this contact form.' }],
});
</script>

<style scoped>
input:focus-within,
textarea:focus-within {
  outline: none;
  box-shadow: 0 0 0 2px #14B8A6;
  border-color: transparent;
}

input:focus,
textarea:focus {
  outline: none;
}
</style>

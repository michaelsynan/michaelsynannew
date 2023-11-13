<template>
    <main>
        <ContentDoc
            class="mx-auto mt-32 prose !prose-stone !prose-invert prose-sm sm:prose lg:prose-lg xl:prose-lg mb-20 px-4 lg:px-12 bg-stone-900 py-10 rounded-lg shadow">
            <template #not-found>
                <div class="h-[500px] flex flex-col items-center justify-center space-y-4">
                    <h1 class="text-4xl text-white font-bold">Post Not Found</h1>
                    <p class="text-white text-lg w-6xl max-w-4xl text-center">The post you are looking for does not exist. <br />
                        If you have any questions or walk to reach out, you can <NuxtLink to="/contact"
                            class="text-primary underline">contact us.</NuxtLink>
                    </p>
                    <NuxtLink class="flex items-center text-white font-bold py-2 px-4 uppercase" to="/blog">
                        <i-mdi-arrow-left class="mr-2" />Home
                    </NuxtLink>
                </div>
            </template>
        </ContentDoc>
    </main>
</template>
    
<script setup>
import { ref } from 'vue';

const post = ref(null);

async function fetchData({ $content, params, error }) {
    try {
        const fetchedPost = await $content('blog', params.slug).fetch();
        if (!fetchedPost) {
            error({ statusCode: 404, message: 'Page not found' });
        } else {
            post.value = fetchedPost;
        }
    } catch (e) {
        error({ statusCode: 500, message: 'Internal Server Error' });
    }
}

fetchData();
</script>
    
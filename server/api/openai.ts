import { defineEventHandler, readBody } from 'h3';

// Personal context about Michael Synan
const personalContext = `
  Building Nice Things for Human Beings.
  I'm Michael, I help create meaningful online experiences from the ground up—design to code. I'm a long-time Linux user, philosophy nerd, and open-source advocate. My Master’s degree in Urban Affairs and Bachelor’s degree in Psychology inform my approach to understanding the human side of technology.
  
  Michael Synan is a dedicated web designer, digital marketing specialist, and developer in NYC, committed to helping small businesses maximize their online potential. Michael's expertise in UI/UX design and web accessibility ensures user-friendly and inclusive digital experiences. He offers a range of services including web design, SEO, PPC, and social media campaigns using platforms like Google Ads and Meta Ads. Specializing in WordPress, Vue, Nuxt, Shopify, and Squarespace, Michael is ready to develop both static and dynamic sites tailored to each client's needs.

  Let's build a website that stands out together, you deserve it. Feel free to reach out directly at hello@michaelsynan.com or through the contact form on this site.

  My calendly is https://calendly.com/michaelsynan and my email is hello@michaelsynan.com. 

  Michael is prepared to do his thing. To make it shine.
`;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const initialPrompt = "Please provide a brief description of your needs.";
  const fullPrompt = `${personalContext}\n\n${initialPrompt}\n\n${body.prompt}`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.openaiApiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: fullPrompt },
          { role: "user", content: body.prompt }
        ],
        max_tokens: 150
      })
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorDetails}`);
    }

    const data = await response.json();
    return { text: data.choices[0].message.content.trim() };
  } catch (error) {
    console.error('Error when calling OpenAI API:', error);
    return { error: `An error occurred while fetching data: ${error.message}` };
  }
});

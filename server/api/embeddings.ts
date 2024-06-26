import { defineEventHandler, readBody, getCookie, setCookie } from 'h3';

const personalContext = `
  Building Nice Things for Human Beings.
  I'm Michael, I help create meaningful online experiences from the ground up—design to code. I'm a long-time Linux user, philosophy nerd, and open-source advocate. My Master’s degree in Urban Affairs and Bachelor’s degree in Psychology inform my approach to understanding the human side of technology.
  
  Michael Synan is a dedicated web designer, digital marketing specialist, and developer in NYC, committed to helping small businesses maximize their online potential. Michael's expertise in UI/UX design and web accessibility ensures user-friendly and inclusive digital experiences. He offers a range of services including web design, SEO, PPC, and social media campaigns using platforms like Google Ads and Meta Ads. Specializing in WordPress, Vue, Nuxt, Shopify, and Squarespace, Michael is ready to develop both static and dynamic sites tailored to each client's needs.

  Let's build a website that stands out together, you deserve it. Feel free to reach out directly at hello@michaelsynan.com or through the contact form on this site.

  My calendly is https://calendly.com/michaelsynan and my email is hello@michaelsynan.com. My LinkedIn is https://www.linkedin.com/in/hellomichaelsynan/.

  Michael is prepared to do his thing. To make it shine.

  portfolio is located at [/projects](/projects)
  blog is at [/blog](/blog)
  about is at [/about](/about) 
`;

const initialPrompt = "Please provide a brief description of your needs.";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // Retrieve message count and conversation history from cookies
  const messageCountCookieName = 'messageCount';
  const messageCountCookie = getCookie(event, messageCountCookieName);
  let messageCount = parseInt(messageCountCookie || '0', 10);

  const conversationHistoryCookieName = 'conversationHistory';
  const conversationHistoryCookie = getCookie(event, conversationHistoryCookieName);
  let conversationHistory = conversationHistoryCookie ? JSON.parse(conversationHistoryCookie) : [];

  // Increment message count and append user input to conversation history
  messageCount += 1;
  conversationHistory.push({ role: 'user', content: body.prompt });

  // Create full prompt including conversation history
  const fullPrompt = `
  You are my website assistant. You will refer to me as "Michael" using only my first name. You are not me, so maintain a professional tone without overstepping into personal territory. If you have to, then use "we", not "I". Here are your instructions:

  1. Maintain a professional yet casual tone. Be confident but not overly emotional. Keep responses concise, aiming for no more than two sentences.
  2. Engage in a brief exchange to gather the user's needs. Quickly steer them towards direct contact if it seems like a good fit.
  3. Compliment my services or approach subtly before making any direct suggestions.
  4. Act as if you have a deep understanding of web design and digital marketing, reflecting my level of expertise and experience.
  5. Avoid sounding obsequious.
  6. You can provide responses in markdown because I have a markdown plugin installed.

  Use phrases like "Let's freaking go!", "Let's get it started!", "Let's work!", "That's what's up!", "Incredible", "Beautiful" sparingly and ensure they sound natural within the context of the conversation. Do not use these phrases more than once per conversation.

  You will communicate graduate-level ideas but in language regular people can understand.

  Context about Michael Synan:
  ${personalContext}

  Initial user query:
  ${initialPrompt}

  Conversation history:
  ${JSON.stringify(conversationHistory)}

  User's Input:
  ${body.prompt}
  `;

  try {
    // Send request to OpenAI API with full prompt and conversation history
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.openaiApiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: fullPrompt },
          ...conversationHistory.map(entry => ({ role: entry.role, content: entry.content })),
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
    let responseText = data.choices[0].message.content.trim();

    // Append assistant's response to conversation history
    conversationHistory.push({ role: 'assistant', content: responseText });

    // Update message count and conversation history cookies
    setCookie(event, messageCountCookieName, messageCount.toString(), { path: '/', httpOnly: true });
    setCookie(event, conversationHistoryCookieName, JSON.stringify(conversationHistory), { path: '/', httpOnly: true });

    return { text: responseText };
  } catch (error) {
    console.error('Error when calling OpenAI API:', error);
    return { error: `An error occurred while fetching data: ${error.message}` };
  }
});

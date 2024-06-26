import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Brew Factory",
        image: "/brewfactory.jpeg",
        placeholder: "./brewfactory_place.jpg",
        imageAria: "Brew Factory",
        description:
          "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
        tech: ["Shopify"],
        link: "https://brewfactory.io/",
        featured: true,
        responsibility: "Project Manager & Developer",
        display: false
      },
      {
        id: 2,
        name: "Big City Dog Walkers",
        image: "/bigcitydogwalkers.png",
        plaeholder: "./bigcitydogwalkers_place.jpg",
        imageAria: "Big City Dog Walkers",
        description:
          "This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum.",
        tech: ["Vue.js", "Nuxt", "Bootstrap.js"],
        link: "https://bigcitydogwalkers.com/",
        responsibility: "Developer",
        display: false
      },
      {
        id: 3,
        name: "Kawakami",
        image: "/kawakami.png",
        imageAria: "Kawakami",
        placeholder: "./kawakami_place.jpg",
        description:
          "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://kawakami.io/",
        featured: true,
        responsibility: "Project Manager",
        display: false
      },
      {
        id: 6,
        name: "Discord Price Bot",
        image: "/github.jpeg",
        imageAria: "Discord Price Bot",
        placeholder: "./github_place.jpg",
        description:
          "I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",
        tech: ["Python"],
        link: "https://github.com/letsbecomehuman/discord-price-bot",
        responsibility: "Developer",
        display: false
      },
      {
        id: 7,
        name: "Design Portfolio",
        image: "/design.jpg",
        imageAria: "Design Portfolio",
        placeholder: "./design.jpg",
        description:
          "Some of my design work on Dribbble.",
        tech: ["Figma"],
        link: "https://dribbble.com/michaelsynan",
        external: true,
        responsibility: "Designer",
        display: true
      },
      {
        id: 8,
        name: "Codepen Designs",
        image: "/codepen3.png",
        imageAria: "Codepen Designs",
        placeholder: "./design.jpg",
        description:
          "Some Codepen designs I've made including 3D animations.",
        tech: ["Figma"],
        link: "https://codepen.io/michaelsynan",
        external: true,
        responsibility: "Designer & Developer",
        display: true
      },
      {
        id: 4,
        name: "Color Palette Generator",
        image: "/colorpalette.png",
        imageAria: "Color Palette Generator",
        placeholder: "/colorpalette.png",
        description:
          "Color Palette Generator is a simple tool I built to help me generate color palettes for my design work.",
        tech: ["Nuxt 3", "TailwindCSS"],
        link: "/projects/color-palette",
        featured: true,
        responsibility: "Developer",
        display: true
      },
      {
        id: 8,
        name: "Libre Photography",
        image: "/libre-photography.webp",
        imageAria: "Codepen Designs",
        placeholder: "./design.jpg",
        description:
          "CC0 Photography website built with Nuxt 3.",
        tech: ["Figma"],
        link: "https://librephotography.com/",
        external: true,
        responsibility: "Designer & Developer",
        display: true
      },
      {
        id: 5,
        name: "Nuxt Tailwind Starter",
        image: "/nuxt-tailwind-starter-template-thumb.webp",
        imageAria: "Nuxt Tailwind Starter",
        placeholder: "/nuxt-tailwind-starter-template-thumb.webp",
        description:
          "Starter template for Nuxt 3 using Tailwind CSS. Includes over 20 components to help with speedy prototyping.",
        tech: ["Nuxt 3", "TailwindCSS"],
        link: "/projects/nuxt-tailwind-starter",
        featured: true,
        responsibility: "Developer",
        display: true
      },
      {
        id: 9,
        name: "Formwork Studios",
        image: "/formwork.jpg",
        imageAria: "Formwork Studios",
        placeholder: "./design.jpg",
        description:
          "Style-guide website mockup for Formwork Studios.",
        tech: ["Figma"],
        link: "https://www.figma.com/file/0BU0DA0Md0PSBt7GlivzHW/Formwork-Studios-Style-Guide?type=design&node-id=20%3A2&mode=design&t=163uyUgL35tnpUsS-1",
        external: true,
        responsibility: "Designer & Developer",
        display: true
      },
      {
        id: 10,
        name: "L'art De La Rue",
        image: "/lart.webp",
        placeholder: "./brewfactory_place.jpg",
        imageAria: "L'art De La Rue",
        description:
          "Trendy jewelry website built with Nuxt for a street vendor in NYC. Features a horizontal infinite image scroll.",
        tech: ["Shopify"],
        link: "/projects/lart-de-la-rue",
        featured: true,
        responsibility: "Project Manager & Developer",
        display: true
      },

      {
        id: 10,
        name: "Artificial Intelligence",
        image: "/ai-chat-bot.webp",
        placeholder: "./ai-chat-bot.webp",
        imageAria: "L'art De La Rue",
        description:
          "Chatbot built with Nuxt for personal website using OpenAI API and contextual prompts.",
        tech: ["Shopify"],
        link: "/projects/artificial-intelligence",
        featured: true,
        responsibility: "Project Manager & Developer",
        display: true
      },
      
      

    ],
    grave: [
      {
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});

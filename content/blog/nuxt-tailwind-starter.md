---
title: Nuxt Tailwind Starter with Base Layer Release
layout: post
description: Introducing the Nuxt Tailwind Starter Template that makes use of the nuxt.config extends key for base layer components. 
tag: 
  - Nuxt
  - Tailwind 
  - Pinia 
category: post
status: published
createdAt: 2023-03-23
head:  
  meta:    
    - name: 'title'      
      content: 'Nuxt Tailwind Starter | Michael Synan'    
    - name: 'description'      
      content: 'Introducing the Nuxt Tailwind Starter Template that makes use of the nuxt.config extends key for base layer components. '    
---

# Introducing the Nuxt 3 Tailwind Starter Template and Base Layer

Over the past year, I've found myself going through the same steps repeatedly to achieve my ideal Nuxt setup. This involved installing and configuring TailwindCSS, creating layouts, installing an icon framework, and creating base components. To make life easier, I decided to create a starter template using best practices and some of the latest Nuxt 3 features, such as adding layers via the extends key in `nuxt.config`. Today, I'm excited to announce the release of this starter template and base layer.

If you're new to Nuxt, feel free to check out the write-up below. Otherwise, you can go straight to the repos here:

- [Nuxt Tailwind Starter Repo](https://github.com/michaelsynan/Nuxt-Tailwind-Template)
- [Base Layer Repo]()

![Nuxt 3 and TailwindCSS](/nuxt3_tailwind5.png)

Visit the demo site [here](https://github.com/michaelsynan/nuxt-base-layer).

The template includes a lot of useful features, including:

- TailwindCSS
- Pinia
- Unplugin-icons
- Very exciting Base Layer

## Purpose of this repo

Minimalst starter template and themable component library for Nuxt. 

In addition to helping myself develop faster, I wanted to provide a resource to the rest of the Nuxt community, particularly new developers. The starter template makes a few key tasks easy out-of-the-box, like providing an icon framework, setting up a CSS framework, and offering a state management system. Together, these features make development fast and simple.

### Tailwind CSS

*Details about Tailwind CSS integration*

### Pinia

*Details about Pinia integration*

### Unplugin-icons

*Details about Unplugin-icons integration*

## Deploying to GitHub Pages and setting baseURL

In order to make the baseURL work properly you must create an `.env` file, which you can do with this command from the project's root directory, replacing the value with your GitHub repo name: 

`echo "BASE_URL=/Nuxt-Tailwind-Template" > .env`

Afterwards you 

## Some next steps

I'll be working on a beginner's guide, developing many more icons for the Base Layer, and cleaning up the code. Stay tuned for updates and improvements to this starter template!


---
title: Reveal on Scroll with Nuxt and Intersection Observer API
layout: default
description: Simple reveal on scroll approach using the Intersection Observer API.
tag: 
  - Intersection Observer
  - Nuxt
  - Vue
image: intersection-observer.webp
category: post
status: published
createdAt: 2023-04-23
head:  
  meta:    
    - name: 'title'      
      content: 'Reveal on Scroll with Nuxt and Intersection Observer | Michael Synan'    
    - name: 'description'      
      content: 'Simple reveal on scroll approach using the Intersection Observer API.'    
---

# {{ $doc.title }}

:TheDate 

While adding as many libraries to your project as possible may seem like fun (it's not), often the sensible choice is to utilize native browser solutions.

**Enter Web Browser APIs.**

One of my favorite Web Browser APIs is [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), which provides an interface for determining if an element is located inside the viewport. This handy API has been around since 2017 and has been proven to be extremely stable and performant for aiding in such tasks as lazy loading, animations and effects, and tracking user engagement. 

Using browser native solutions like the Intersection Observer API helps reduce load time and decreases the number of dependencies in your project. 

In this tutorial I'll demonstrate how to add Intersection Observer to your Nuxt 3 project in order to trigger a reveal on scroll CSS animation. 

![Intersection Observer Illustration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j2k62v4bskvvgi1opm7q.png)

 
### How Does it Work? 

The Intersection Observer API works by creating a new observer instance which takes a callback function and options as its arguments. The callback function is executed whenever the target element intersects with the specified threshold in the viewport, defined in the options object. By invoking the observer's observe method and passing in the target element, you can efficiently monitor and react to its visibility changes on the page.

In order to use Intersection Observer to animate an element on scroll you'll need to use the `onMounted()` Vue.js hook. 

To do this, simply import `onMounted` in the script section of your component template:
```
import { onMounted, ref } from 'vue';
```
 
### Intersection Observer

Next, you must create your Observer instance inside of the `onMounted` lifecycle hook and write your desired logic for any elements that get passed back, like so:
```
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-delay');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (demo) {
    observer.observe(demo);
  }
});
```
In the example above the CSS class "animate-delay" is appended to the class list of any element being observed.
 
### CSS styles

With your Observer in place, you can wrap up by adding the desired CSS animations:
```
.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.demo {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
}
</style>
```

In the demo code I added a ref to my target element called "demo" but you can use classes, IDs and any other DOM element:
```
<span ref="demo" class="demo">
  Intersection Observer in Action 👌
</span>
```
 
### Troubleshooting

If you have any issues you can always use `console.log` inside of the Observer instance to check if your Observer instance is working correctly: 
```
console.log('Observed element:', entry.target);
```
 
### Live Demo
If you want to see it in action, you can check out the live demo on StackBlitz: https://stackblitz.com/edit/intersection-observer-nuxt?file=README.md

 
### Conclusion 

In conclusion, using browser native solutions like the Intersection Observer API can greatly benefit the performance of your project by reducing load time and dependencies. The Intersection Observer API provides a stable and efficient solution for triggering animations and effects on scroll. By implementing this API in your Nuxt 3 project, you can easily create some nice animations and increase website performance. 

:Back
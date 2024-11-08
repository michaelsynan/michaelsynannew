<script lang="ts" setup></script>

<template>
  <div id="toggle-wrapper" class="flex flex-col rounded-full gap-2 p-1 border-2 z-100 items-center">
    <input type="checkbox" id="toggle" class="hidden" />

    <label for="toggle"
      class="toggle-label h-8 w-8 rounded-full text-sm border-2 cursor-pointer items-center flex justify-center">

      <!-- <img src="/MdiCodeTags.svg" /> -->
      <p class="w-full font-bold text-xs text-center">DEV</p>
    </label>

    <div id="toggleIndicator" class="h-8 w-8 border-2 rounded-full absolute -z-10"></div>

    <label for="toggle"
      class="toggle-label h-8 w-8 rounded-full text-sm border-2 cursor-pointer text-center align-middle items-center flex justify-center mx-auto">
      <p class="w-full  font-bold text-xs">UX</p>
    </label>

  </div>
</template>

<style scoped>
#toggleIndicator {
  transition: transform 0.2s ease-in-out;
  background-color: #f5f5f4;
}

/* Target the first label when the checkbox is NOT checked */
/* Target the p tag in the first label when the checkbox is NOT checked */
input[type="checkbox"]:not(:checked)+.toggle-label p {
  color: #000;
  /* Active text color */
  transition: color 0.2s ease-in-out;
  /* Smooth transition for color change */
}

/* Target the p tag in the second label when the checkbox is checked */
input[type="checkbox"]:checked+.toggle-label+#toggleIndicator+.toggle-label p {
  color: #000;
  /* Active text color */
  transition: color 0.2s ease-in-out;
  /* Smooth transition for color change */
}

/* Default styles for p tags in labels to appear inactive */
.toggle-label p {
  color: #f5f5f4;
  /* Inactive text color */
  transition: color 0.2s ease-in-out;
  /* Ensures transition applies both ways */
}

/* Additional styling rules for toggleIndicator and label backgrounds */
input[type="checkbox"]:not(:checked)+.toggle-label {
  background-color: none;
}

input[type="checkbox"]:checked+.toggle-label+#toggleIndicator+.toggle-label {
  background-color: none;
}

.toggle-label {
  background-color: none;
}

/* Move the toggleIndicator based on the checkbox state */
input[type="checkbox"]:checked+.toggle-label+#toggleIndicator {
  transform: translateY(125%);
  /* Adjust if necessary */
}

input[type="checkbox"]:not(:checked)+.toggle-label+#toggleIndicator {
  transform: translateY(0%);
}
</style>

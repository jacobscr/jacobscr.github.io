<template>
  <div class="flex flex-col items-center space-y-2">
    <span class="text-sm text-neutral-500">Scroll</span>
    <div class="w-5 h-9 rounded-full border-2 border-neutral-700 flex items-start justify-center p-1">
      <div class="w-1 h-1 bg-teal-400 rounded-full animate-scroll"></div>
    </div>
  </div>
</template>

<style scoped>
.animate-scroll {
  animation: scroll 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes scroll {
  0% { transform: translateY(0); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0); }
}
</style>
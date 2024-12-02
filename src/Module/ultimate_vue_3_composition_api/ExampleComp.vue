<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useCounter } from "./useCounter";
import { useMouse } from "./useMouse";

const count = ref<number>(0);
const { count: CountUserCounter, increment: IncremenCounter } = useCounter();
const { x, y } = useMouse();
const doubleCount = computed(() => count.value * 2);
function increment(): void {
  count.value++;
}

watch(count, (newCount) => {
  console.log("from", count.value, "Counte changed to", newCount);
});
</script>
<template>
  <div>
    <p>Current Count: {{ count }}</p>

    <!-- Display the double of the current count -->
    <p>Double Count: {{ doubleCount }}</p>
    <p>useCounter: {{ CountUserCounter }}</p>
    <button @click="increment">Increment</button>
    <button @click="IncremenCounter">IncrementCounter</button>

    <p>Mouse Position: ({{ x }}, {{ y }})</p>
  </div>
</template>

<style></style>

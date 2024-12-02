<script setup>
import ExampleCompVue from "./ExampleComp.vue";
import { ref, reactive, computed, onMounted, watch } from "vue";

// Best Practices for Using the Composition API
// 1. Organize Logic into Composable Functions
// Encapsulate related logic into functions that can be reused across different components. This helps keep your components clean and focused on their primary responsibilities.

// 2. Use Reactive References Wisely // Use ref for primitive values and
// reactive for objects or arrays. This ensures that Vue can track dependencies and
// update the UI efficiently.

// 3. Leverage Computed Properties // Use computed
// properties for derived state that depends on other reactive data. This helps
// keep your logic clear and efficient.

// 4. Keep Side Effects in setup // Place
// side effects, such as data fetching or event listeners, inside the setup
// function using lifecycle hooks like onMounted and onUnmounted.

// 5. Use Watchers for Reactive Effects
// Use watch to react to changes in reactive data. This is useful for executing code in response to data changes.
const user = reactive({ name: "John", age: 30 });

const price = ref(100);
const quantity = ref(2);

const data = ref(null);
const total = computed(() => price.value * quantity.value);
onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    data.value = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div>
    {{ user }}

    <p>Total</p>
    {{ total }}

    <div v-if="data">
      {{ data[0] }}
    </div>
    <ExampleCompVue />
  </div>
</template>
<style></style>

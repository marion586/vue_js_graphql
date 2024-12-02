// Best Practices for Using the Composition API
// 1. Organize Logic into Composable Functions
// Encapsulate related logic into functions that can be reused across different components. This helps keep your components clean and focused on their primary responsibilities.
import { ref, onMounted, onUnmounted, Ref } from "vue";

interface IPoint {
  x: Ref<number>;
  y: Ref<number>;
}

export function useMouse(): IPoint {
  const x = ref<number>(0);
  const y = ref<number>(0);

  function update(event: MouseEvent): void {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));
  return { x, y };
}

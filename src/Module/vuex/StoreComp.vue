<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementAsync">Increment After 1 Second</button>
    <button @click="setCountToTen">Set Count to 10</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },

    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
    setCountToTen() {
      this.$store.commit("setCount", 10);
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>

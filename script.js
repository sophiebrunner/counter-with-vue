Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
      if (this.counter === 101) {
        this.resetCounter();
      }
    },
    resetCounter() {
      this.counter = 0;
    },
  },
}).mount("#app");

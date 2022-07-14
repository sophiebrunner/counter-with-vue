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

// //The second central function of the Counter is filling the background;
// //The countingColor will be constantly updated like the countingNumber;
// //To the main-section, which represents the background I want to fill,
// //I synch the custom-property progress from my CSS (initial value: 0%) with the countingColor;
// //If countingColor reaches 101; the background-color will be set to 0;
// function fillBackground() {
//   countingColor++;
//   main.style.setProperty("--progress", countingColor + "%");

//   if (countingColor === 101) {
//     resetBackground();
//   }
// }

// function resetBackground() {
//   countingColor = 0;
//   main.style.setProperty("--progress", countingColor + "%");
// }

// main.addEventListener("click", function () {
//   counterUp();
//   fillBackground();
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === " " || e.key === "Enter") {
//     counterUp();
//     fillBackground();
//   }
// });

// resetButton.addEventListener("click", function () {
//   resetCounter();
//   resetBackground();
//   resetButton.blur();
// });

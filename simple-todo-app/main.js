Vue.createApp({
  // data function returns an object - we need this to get the data of the DOM
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  // functions that are executed when something happens in the DOM
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");
// mount() is a function that takes a selector and mounts the Vue app to the element with the given selector

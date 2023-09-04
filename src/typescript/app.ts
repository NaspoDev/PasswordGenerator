// Imports

// Main application functions on startup
const APP = {
  date: new Date(),
  init() {
    console.log(this.date.toDateString());
  },
  addListeners() {
    // Add event listeners here
  },
};

APP.init();

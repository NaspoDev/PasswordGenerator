// Imports
import { initializeListeners } from "./listeners.js";

// Main application functions on startup
const APP = {
  date: new Date(),
  init() {
    console.log(this.date.toDateString());
    this.addListeners();
  },
  addListeners() {
    initializeListeners();
  },
};

APP.init();

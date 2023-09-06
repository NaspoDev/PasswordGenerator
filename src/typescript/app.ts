// Imports
import { addListeners } from "./listeners.js";

// Main application functions on startup
const APP = {
  date: new Date(),
  init() {
    console.log(this.date.toDateString());
    addListeners();
  },
};

APP.init();

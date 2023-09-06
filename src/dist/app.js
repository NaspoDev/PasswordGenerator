import { initializeListeners } from "./listeners.js";
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

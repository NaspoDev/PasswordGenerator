import { addListeners } from "./listeners.js";
const APP = {
    date: new Date(),
    init() {
        console.log(this.date.toDateString());
        addListeners();
    },
};
APP.init();

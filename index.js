import App from "./src/App.js";
import { createStore } from "./src/core/store.js";

const store = createStore()

new App(document.getElementById("app"))
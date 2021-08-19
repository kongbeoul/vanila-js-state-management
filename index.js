import App from "./src/App.js";
import { createStore } from "./src/core/store.js";
import reducer from "./src/reducers/index.js";

const store = createStore(reducer);
const app = new App(document.getElementById("app"), store)

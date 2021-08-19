import { increment, decrement } from "./reducers/counter.js";

export default function App($app, store) {
    this.$app = $app;
    this.$store = store;

    this.render = function render() {
        const { counter } = this.$store.getState();
        
        this.$app.innerHTML = `
            <button type="button" class="increment"> + </button>
            <button type="button" class="decrement"> - </button>
            ${counter}
        `;

        this.mounted();
    }

    this.mounted = function mounted() {
        this.$app.querySelector(".increment").addEventListener("click", () => this.$store.dispatch(increment()));
        this.$app.querySelector(".decrement").addEventListener("click", () => this.$store.dispatch(decrement()));
    }

    this.$store.subscribe(this.render.bind(this));
    this.render();
}
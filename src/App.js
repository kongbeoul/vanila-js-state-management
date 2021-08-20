import { bindActionCreators } from "./core/bindActionCreators.js";
import { INCREMENT, DECREMENT } from "./reducers/counter.js";

export default function App($app, store) {
    this.$app = $app;
    const { getState, dispatch, subscribe } = store;

    this.boundActionCreators = bindActionCreators({
        [INCREMENT]: payload => ({ type: INCREMENT, payload }),
        [DECREMENT]: payload => ({ type: DECREMENT, payload })
    }, dispatch);

    this.render = function render() {
        const { counter } = getState();
        
        this.$app.innerHTML = `
            <button type="button" class="increment"> + </button>
            <button type="button" class="decrement"> - </button>
            ${counter}
        `;

        this.mounted();
    }

    this.mounted = function mounted() {
        this.$app.querySelector(".increment").addEventListener("click", this.boundActionCreators[INCREMENT]);
        this.$app.querySelector(".decrement").addEventListener("click", this.boundActionCreators[DECREMENT]);
    }

    subscribe(this.render.bind(this));
    
    this.render();
}
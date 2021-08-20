import Component from "../core/components.js";
import { INCREMENT, DECREMENT } from "../reducers/counter.js"
import { bindActionCreators } from "../core/bindActionCreators.js";

export default class Counter extends Component {
    constructor($app, store) {
        super();
        this.$target = document.createElement("div");
        this.$store = store;
        $app.appendChild(this.$target);
        
        this.init();
    }    
    init() {
        const { dispatch } = this.$store;

        this.boundActionCreators = bindActionCreators({
            [INCREMENT]: payload => ({ type: INCREMENT, payload }),
            [DECREMENT]: payload => ({ type: DECREMENT, payload })
        }, dispatch)
    }
    render() {
        const { getState } = this.$store;
        const { counter } = getState();
        
        this.$target.innerHTML = `
            <button type="button" class="increment"> + </button>
            <button type="button" class="decrement"> - </button>
            ${counter}
        `;

        this.mounted();
    }
    mounted() {
        const { $target, boundActionCreators } = this;

        $target.querySelector(".increment").addEventListener("click", boundActionCreators[INCREMENT]);
        $target.querySelector(".decrement").addEventListener("click", boundActionCreators[DECREMENT]);
    }
}
import Component from "../core/components.js";
import { bindActionCreators } from "../core/bindActionCreators.js";
import { increment, decrement } from "../reducers/counter.js";

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
            increment,
            decrement
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

        $target.querySelector(".increment").addEventListener("click", boundActionCreators['increment']);
        $target.querySelector(".decrement").addEventListener("click", boundActionCreators['decrement']);
    }
}
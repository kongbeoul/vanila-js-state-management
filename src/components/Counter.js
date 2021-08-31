import Component from "../core/components.js";
import { bindActionCreators } from "../core/bindActionCreators.js";
import { INCREMENT, DECREMENT } from "../reducers/counter.js";
import diff from "../core/diff.js";

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
        }, dispatch);
    }
    render() {
        const { getState } = this.$store;
        const { counter } = getState();
        
        const newNode = this.$target.cloneNode(true);

        newNode.innerHTML = `
            <button type="button" class="increment"> + </button>
            <button type="button" class="decrement"> - </button>
            ${counter}
        `.trim();
               
        const oldChildNodes = [...this.$target.childNodes ];
        const newChildNodes = [...newNode.childNodes ];
        const len = Math.max(oldChildNodes.length, newChildNodes.length);

        for(let i = 0; i < len; i++) {
            diff(this.$target, newChildNodes[i], oldChildNodes[i]);
        }

        this.mounted();
    }
    mounted() {
        const { $target, boundActionCreators } = this;

        $target.querySelector(".increment").removeEventListener("click",  boundActionCreators[INCREMENT]);
        $target.querySelector(".decrement").removeEventListener("click", boundActionCreators[DECREMENT]);

        $target.querySelector(".increment").addEventListener("click", boundActionCreators[INCREMENT]);
        $target.querySelector(".decrement").addEventListener("click", boundActionCreators[DECREMENT]);
    }
}
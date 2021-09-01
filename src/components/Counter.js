import Component from "../core/components.js";
import diff from "../core/diff.js";

export default class Counter extends Component {
    constructor($app, props = {}) {
        super(props);
        this.$target = document.createElement("div");
        $app.appendChild(this.$target);
    }    
    render(nextProps) {
        if(nextProps) {
            this.props = {
                ...this.props,
                ...nextProps
            }
        }

        const newNode = this.$target.cloneNode(true);

        newNode.innerHTML = `
            <button type="button" class="increment"> + </button>
            <button type="button" class="decrement"> - </button>
            ${this.props.counter}
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
        const { $target } = this;
        const { onIncrement, onDecrement } = this.props;

        $target.querySelector(".increment").removeEventListener("click", onIncrement);
        $target.querySelector(".decrement").removeEventListener("click", onDecrement);

        $target.querySelector(".increment").addEventListener("click", onIncrement);
        $target.querySelector(".decrement").addEventListener("click", onDecrement);
    }
}
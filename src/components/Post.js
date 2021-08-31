import Component from "../core/components.js";
import diff from "../core/diff.js";

export default class Post extends Component {
    constructor($app, $store) {
        super();
        this.$target = document.createElement("div");
        this.$store = $store;
        $app.appendChild(this.$target);
    }
    render() {
        const { getState } = this.$store;
        const { post } = getState()
        const newNode = this.$target.cloneNode(true);

        newNode.innerHTML = post.posts.map(post => {
            const { userId, title, body} = post; 
            return `
                <span>${userId}</span>
                <p>${title}</p>
                <div>${body}</div>
            `        
        }).join('');

        const oldChildNodes = [...this.$target.childNodes ];
        const newChildNodes = [...newNode.childNodes ];
        const len = Math.max(oldChildNodes.length, newChildNodes.length);
        for(let i = 0; i < len; i++) {
            diff(this.$target, newChildNodes[i], oldChildNodes[i])
        }
    }
}
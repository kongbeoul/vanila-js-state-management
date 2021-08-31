import Counter from "./components/Counter.js";
import Post from "./components/Post.js";
import { getPostsAPI } from "./api/posts.js"

export default class App {
    constructor($app, store) {
        this.$app = $app;
        this.$store = store;
        this.init();
    }
    init() {
        this.counter = new Counter(this.$app, this.$store);
        this.post = new Post(this.$app, this.$store);

        this.render();
        this.$store.subscribe(this.render.bind(this));
        
        this.mounted();
    }
    render() {
        this.counter.render();
        this.post.render();
    }
    async mounted() {
        getPostsAPI(this.$store.dispatch);
    }
}
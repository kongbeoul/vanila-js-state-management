import Counter from "./components/Counter.js";
import Post from "./components/Post.js";

import { increment, decrement } from "./reducers/counter.js";
import { getPostsAPI } from "./api/posts.js"

export default class App {
    constructor($app, store) {
        this.$app = $app;
        this.$store = store;
        this.init();
    }
    init() {
        const { dispatch, getState } = this.$store;
        const state = getState();

        this.counter = new Counter(this.$app, {
            counter: state.counter,
            onIncrement: payload => dispatch(increment(payload)),
            onDecrement: payload => dispatch(decrement(payload))
        })

        this.post = new Post(this.$app, {
            isLoading: state.post.isLoading,
            errorMsg: state.post.errorMsg,
            posts: []
        });

        this.render();
        this.$store.subscribe(this.render.bind(this));
        
        this.mounted();
    }
    render() {
        const state = this.$store.getState();

        this.counter.render({ counter: state.counter });

        this.post.render({
            isLoading: state.post.isLoading,
            errorMsg: state.post.errorMsg,
            posts: state.post.posts
        });
    }
    mounted() {
        getPostsAPI(this.$store.dispatch);
    }
}
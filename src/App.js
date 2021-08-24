import Counter from "./components/Counter.js";

export default class App {
    constructor($app, store) {
        this.$app = $app;
        this.$store = store;
        this.init();
    }
    init() {
        this.counter = new Counter(this.$app, this.$store);
        this.render();
        this.$store.subscribe(this.render.bind(this));
    }
    render() {
        this.counter.render();
    }
}
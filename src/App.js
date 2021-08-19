export default function App($app, store) {
    this.$app = $app;
    this.$store = store;

    this.render = function() {
        this.$app.innerHTML = '111'
    }

    this.render();
}
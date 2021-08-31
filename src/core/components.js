export default class Component {    
    state = {}

    setState(nextState) {
        if(this.state !== nextState) {
            this.state = nextState;
            return false;
        }
        this.render();
        this.mounted();
    }
    init() {}
    render() {}
    mounted() {}
}
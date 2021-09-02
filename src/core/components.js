export default class Component {    
    state = {}
    constructor(props) {
        this.props = props;
    }
    setState(nextState) {
        if(nextState && this.state !== nextState) {
            this.state = nextState;
            return false;
        }
        this.render();
        this.mounted();
    }
    render(nextProps) {}
    mounted() {}
}
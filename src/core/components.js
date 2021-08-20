export default class Component {    
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState(nextState) {
        if(this.state !== nextState) {
            this.state = nextState;
        }
    }
    init() {}
    render() {}
    mounted() {}
}
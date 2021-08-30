export default class Component {    
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState(nextState) {
        if(this.state !== nextState) {
            this.state = nextState;
            return false;
        }
        this.render();
        this.mounted();
    }
    init() {}
    render(nextProps) { 
        if(this.props !== nextProps) {
            this.props = {
                ...this.props,
                nextProps
            }
        }
    }
    mounted() {}
}
const bindActionCreator = (actionCreator, dispatch) => {
    return (...args) => {
        dispatch(actionCreator.apply(this, ...args))
    }
}

export const bindActionCreators = (actionCreators, dispatch) => {
    if(typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }

    const boundActionCreatros = {};

    for(const key in actionCreators) {
        if(typeof actionCreators[key] === "function") {
            boundActionCreatros[key] = bindActionCreator(actionCreators[key], dispatch);
        }
    }

    return boundActionCreatros;
}
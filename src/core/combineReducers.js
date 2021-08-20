export const combineReducers = reducers => {
    const finalReducers = Object.keys(reducers).reduce((final, key) => {
        if(typeof reducers[key] === "function") {
            final[key] = reducers[key];
        }        
        return final;
    }, {});

    return (state = {}, action) => {
        let hasChanged;
        const nextState = {};

        for(const key of Object.keys(finalReducers)) {
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        
        hasChanged = hasChanged || finalReducers.length !== Object.keys(state).length;

        return hasChanged ? nextState : state;
    }
};

export const combineReducers = reducers => {
    const finalReducers = Object.keys(reducers).reduce((final, key) => {
        if(typeof reducers[key] === "function") {
            final[key] = reducers[key];
        }        
        return final;
    }, {});

    const finalReducerKeys = Object.keys(finalReducers);

    return (state = {}, action) => {
        let hasChanged;
        const nextState = {};

        for(const key of finalReducerKeys) {
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;

        return hasChanged ? nextState : state;
    }
};

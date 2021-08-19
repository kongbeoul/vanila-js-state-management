export const combineReducers = reducers => {
    const keys = Object.keys(reducers);
    const finalReducers = {};

    for(let k of keys) {
         if(typeof reducers[k] === "function") {
            finalReducers[k] = reducers[k];
        }
    }

    const finalReducerKeys = Object.keys(finalReducers);

    return (state = {}, action) => {
        let hasChanged = false;
        const nextState = {};

        for(const fk of finalReducerKeys) {
            const reducer = finalReducers[fk];
            const previousStateForKey = state[fk];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[fk] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }

        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;

        return hasChanged ? nextState : state;
    }
};

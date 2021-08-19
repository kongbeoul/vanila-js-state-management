export const createStore = reducer => {
    const listeners = new Set();
    let state = reducer();

    const getState = () => ({ ...state });

    const subscribe = fn => listeners.add(fn);

    const dispatch = action => {
        state = reducer(state, action);
        
        for(const fn of listeners) {
            fn();
        }
    }

    return {
        getState,
        subscribe,
        dispatch
    }

}
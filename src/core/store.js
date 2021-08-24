const INIT = 'INIT';

export const createStore = (reducer, preloadState) => {
    const listeners = new Set();
    let state = preloadState;

    const getState = () => ({ ...state });

    const subscribe = fn => {
        listeners.add(fn);
        return () => {
            listeners.delete(fn);
        }
    }

    const dispatch = action => {
        state = reducer(state, action);
        for(const fn of listeners) {
            fn();
        }
    }

    dispatch({
        type: INIT
    })

    return {
        getState,
        subscribe,
        dispatch
    }

}
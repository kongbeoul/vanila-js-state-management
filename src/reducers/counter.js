import { actionCreator } from "../core/actionCreator.js";

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export const increment = actionCreator(INCREMENT);
export const decrement = actionCreator(DECREMENT);

export default function reducer(state = 0, action) {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
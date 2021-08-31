import { GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE } from "../reducers/posts.js";

const API_END_POINT = 'https://jsonplaceholder.typicode.com/posts'

export const getPostsAPI = async dispatch => {
    dispatch({
        type: GET_POST
    })
    try {
        const response = await fetch(API_END_POINT);
        const payload = await response.json();
        dispatch({
            type: GET_POST_SUCCESS,
            payload
        });
    } catch(e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e
        })
    }
    
}
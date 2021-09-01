import { getPost, getPostSuccess, getPostFailure } from "../reducers/posts.js";

const API_END_POINT = 'https://jsonplaceholder.typicode.com/posts'

export const getPostsAPI = async dispatch => {
    
    dispatch(getPost())

    try {
        const response = await fetch(API_END_POINT);
        const payload = await response.json();

        dispatch(getPostSuccess(payload));

    } catch(e) {
        dispatch(getPostFailure(e))
    }
    
}
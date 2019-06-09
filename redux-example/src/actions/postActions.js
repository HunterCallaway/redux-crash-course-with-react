import {FETCH_POSTS, NEW_POST} from "./types";

//Call the dispatch function directly for asynchronous requests.
export const fetchPosts =() => dispatch => {
		//Fetch gives us a result that needs to be mapped to json,
		//and then when we receive the posts, we will dispatch the data to the reducer.
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(posts => dispatch({
				type: FETCH_POSTS,
				payload: posts
			}));
}
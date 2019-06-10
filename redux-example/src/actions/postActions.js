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
};

export const createPost =(postData) => dispatch => {
	//Fetch the json object, declare the request method
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		//Specify the content-type.
		headers: {
			'content-type': 'application/json'
		},
		//Convert the data to strings.
		body: JSON.stringify(postData)
	})
	//Use the then() method to return JSON data and then dispatch the data to the reducer.
		.then(res => res.json())
		.then(post => dispatch({
			type: NEW_POST,
			payload: post
		}));
};
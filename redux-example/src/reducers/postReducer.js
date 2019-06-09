import {FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
	//The posts that come in from the action.
	items: [],
	//The single post we add.
	item: {}
};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}
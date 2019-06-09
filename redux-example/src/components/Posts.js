import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/postActions";

class Posts extends React.Component {

	/*state = {
		posts: []
	};*/

	//Legacy lifecycle method - will be supported until version 17
	//Called before the render() method.
	//Fetch gives us a result that needs to be mapped to json,
	//and then we receive the data, we will set it to posts.
	/*UNSAFE_componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => this.setState({posts: data}));
	}*/

	UNSAFE_componentWillMount() {
		this.props.fetchPosts();
	}

	render () {
		//Map over the posts and return JSX.
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
};

//Get the state from Redux and map it to properties of the component
//for use inside of the component.
const mapStateToProps = state => ({
	posts: state.posts.items
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
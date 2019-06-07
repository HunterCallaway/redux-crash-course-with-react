import React from 'react';

class Posts extends React.Component {

	state = {
		posts: []
	};

	//Legacy lifecycle method - will be supported until version 17
	//Called before the render() method.
	//Fetch gives us a result that needs to be mapped to json,
	//and then we receive the data, we will set it to posts.
	UNSAFE_componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => this.setState({posts: data}));
	}

	render () {
		//Map over the posts and return JSX.
		const postItems = this.state.posts.map(post => (
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

export default Posts;
import React from 'react';

class PostForm extends React.Component {

	state = {
		title: '',
		body: ''
	};

	//Bind this to onChange and onSubmit.
	//Note: this statement used to go inside of the constructor declaration.
	onChange = this.onChange.bind(this);
	onSubmit = this.onSubmit.bind(this);

	onChange(e) {
		//Set the state.
		//Use e.target to avoid having to create separate onChange functions for every event.
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		//Prevent the default behavior.
		e.preventDefault();

		//Set the post variable equal to what will be submitted.
		const post = {
			title: this.state.title,
			body: this.state.body
		}

		//Fetch the json object, declare the request method
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			//Specify the content-type.
			headers: {
				'content-type': 'application/json'
			},
			//Convert the data to strings.
			body: JSON.stringify(post)
		})
		//Use the then() method to return JSON data and then console log the requested data.
			.then(res => res.json())
			.then(data => console.log(data))
	}

	render () {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label><br />
						<input
							type='text'
							name='title'
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<br />
					<div>
						<label>Body:</label><br />
						<textarea
							name='body'
							onChange={this.onChange}
							value={this.state.body}
						/>
					</div>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm;
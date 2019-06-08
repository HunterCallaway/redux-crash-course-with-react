import React from 'react';

class PostForm extends React.Component {

	state = {
		title: '',
		body: ''
	};

	//Bind this.
	//Note: this statement used to go inside of the constructor declaration.
	onChange = this.onChange.bind(this);

	onChange(e) {
		//Set the state.
		//Use e.target to avoid having to create separate onChange functions for every event.
		this.setState({[e.target.name]: e.target.value})
	}

	render () {
		return (
			<div>
				<h1>Add Post</h1>
				<form>
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
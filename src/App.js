import React from 'react';
import './App.css';
import PostCard from './PostCard';

class App extends React.Component {
	state = {
		posts: [
			{
				id: 1,
				content: "My daughter roasted me for fathers day. I couldn't be more proud",
				hoursAgo: 3,
				author: 'magnus',
				image: 'https://preview.redd.it/0u0fbvyjp9651.jpg?width=640&height=853&crop=smart&auto=webp&s=4ad2a55c389c09fa9508c3da9d9c06bb96f21fef',
				comments: ['comment1: says stuff', 'comment2: says more'],
				upvotes: 50,
			},
			{
				id: 2,
				content: 'Man crashes a #BlueLivesMatter police rally in a pig costume',
				hoursAgo: 13,
				author: 'tranquilo',
				image: '',
				comments: ['comment1: says different stuff', 'comment2: says more stuff'],
				upvotes: 45,
			},
			{
				id: 3,
				content: 'People who were on show like supernanny, worlds strictest parents, or Scared Straight, what was the experience like? And what was the aftermath?',
				hoursAgo: 14,
				author: 'body_by_art',
				image: '',
				comments: ['comment1: says something', 'comment2: says something else', 'comment3'],
				upvotes: 40,
			},
		],
	};

	handleUpvotes = (clickedId, plusOrMinus) => {
		const { posts } = this.state;
		const updatedPosts = [...posts];

		updatedPosts.map((post) => {
			if (post.id === clickedId && plusOrMinus === '+') {
				post.upvotes += 1;
			}
			if (post.id === clickedId && plusOrMinus === '-') {
				post.upvotes -= 1;
			}
			return post;
		});
		this.setState({
			posts: updatedPosts,
		});
	};
	render() {
		const { posts } = this.state;

		return (
			<div className="App">
				{posts.map((post) => {
					return <PostCard post={post} handleUpvotes={this.handleUpvotes} />;
				})}
			</div>
		);
	}
}
export default App;

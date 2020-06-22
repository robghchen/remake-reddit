import React from 'react';
import CommentContainer from './CommentContainer';

class PostCard extends React.Component {
	render() {
		const { post, handleUpvotes } = this.props;
		return (
			<div>
				<h3> {post.content} </h3>
				<p>{`Posted by ${post.author} ${post.hoursAgo} hours ago`}</p>
				<p onClick={() => handleUpvotes(post.id, '+')}>+</p>
				<p>{post.upvotes}</p>
				<p onClick={() => handleUpvotes(post.id, '-')}>-</p>
				<img src={post.image} alt="404 ERROR" />
				<CommentContainer comments={post.comments} />
			</div>
		);
	}
}
export default PostCard;

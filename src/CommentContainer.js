import React from 'react';
import CommentCard from './CommentCard';

class CommentContainer extends React.Component {
	render() {
		const { comments } = this.props;

		return (
			<div>
				{comments.map((comment) => {
					return <CommentCard comment={comment} />;
				})}
			</div>
		);
	}
}
export default CommentContainer;

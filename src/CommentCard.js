import React from 'react';

class CommentCard extends React.Component {
	render() {
		const { comment } = this.props;

		return <div>{comment}</div>;
	}
}

export default CommentCard;

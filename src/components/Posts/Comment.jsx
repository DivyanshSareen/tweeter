const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div className='avatar'>
        <img
          src={require(`../../assets/${
            comment.profilePicture === undefined
              ? "default_pp.png"
              : comment.profilePicture
          }`)}
          alt='avatar-img'></img>
      </div>
      <p className='comment-author'>
        <b>
          {comment.firstName} {comment.lastName}
        </b>
        @{comment.username}
      </p>
      <p className='comment-text paragraph1'>{comment.text}</p>
    </div>
  );
};

export default Comment;

import Comment from "../Posts/Comment";

const BookmarkPost = ({ post }) => {
  return (
    <>
      <section className='bookmark-post'>
        <div className='avatar'>
          <img
            src={require("../../assets/" + post.userImage)}
            alt='avatar-img'></img>
        </div>
        <div className='post-content'>
          <p className='post-author'>
            <b>
              {post.firstName} {post.lastName}
            </b>
            @{post.username}
          </p>
          <p className='post-text'>{post.content}</p>
        </div>
        <div className='post-option'></div>
      </section>
      <section className='comments'>
        {post.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </section>
    </>
  );
};

export default BookmarkPost;

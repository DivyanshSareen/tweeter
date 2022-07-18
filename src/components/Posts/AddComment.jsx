const AddComment = () => {
  const dispatch = useDisptach();
  return (
    <section className='create-post'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updatePost({ ...originalPost, content: postContent }));
        }}>
        <div className='text-area'>
          <label className='textarea-label' htmlFor='desc'>
            What's on your mind?
          </label>
          <textarea
            className='textarea-data'
            cols='40'
            rows='8'
            id='desc'
            value={postContent}
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
            placeholder='Start typing!'></textarea>
          <input type='submit' className='btn btn-ghost' value='save'></input>
        </div>
      </form>
    </section>
  );
};

export default AddComment;

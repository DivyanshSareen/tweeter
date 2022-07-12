const CreatePost = () => {
  return (
    <section className='create-post'>
      <div className='avatar'>
        <img src={require("../../assets/landing1.jpg")} alt='avatar-img'></img>
      </div>
      <form>
        <div className='text-area'>
          <label className='textarea-label' for='desc'>
            What's on your mind?
          </label>
          <textarea
            className='textarea-data'
            cols='40'
            rows='8'
            id='desc'
            placeholder='Start typing!'></textarea>
          <input type='submit' className='btn btn-ghost' value='post'></input>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;

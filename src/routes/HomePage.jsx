import CreatePost from "../components/Posts/CreatePost";
import Post from "../components/Posts/Post";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            <Post />
            <Post />
            <Post />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

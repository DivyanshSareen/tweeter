import CreatePost from "../components/Posts/CreatePost";
import Post from "../components/Posts/Post";
import { useSelector, useDispatch } from "react-redux";
import { getListOfPosts } from "../store/posts/postsSlice";
import "../styles/home.css";
import { useEffect } from "react";

const HomePage = () => {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListOfPosts());
  }, []);
  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            <h5 className='h6 timeline-title'>Timeline</h5>
            {posts.postsList.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

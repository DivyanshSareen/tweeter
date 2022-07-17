import CreatePost from "../components/Posts/CreatePost";
import Post from "../components/Posts/Post";
import { useSelector, useDispatch } from "react-redux";
import { getListOfPosts } from "../store/posts/postsSlice";
import "../styles/home.css";
import { useEffect } from "react";

const HomePage = () => {
  const posts = useSelector((store) => store.posts);
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.status === "fulfilled") {
      dispatch(getListOfPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status]);

  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            <h5 className='h6 timeline-title'>Timeline</h5>
            {posts?.postsList?.map((post) => (
              <Post key={post?._id} post={post} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

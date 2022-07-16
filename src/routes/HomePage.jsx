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
  useEffect(() => {
    if (posts.status === "fulfilled") {
      console.log(posts.postsList);
    }
  }, [posts.status]);
  return (
    <>
      <div className='homepage'>
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            {posts.postsList.map((post) => (
              <Post post={post} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

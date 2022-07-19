import { useSelector } from "react-redux/es/exports";
import Post from "../components/Posts/Post";

const ExplorePage = () => {
  const posts = useSelector((store) => store.posts);
  return (
    <div className='explore'>
      <h5 className='h5'>Explore</h5>
      {posts.postsList.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default ExplorePage;

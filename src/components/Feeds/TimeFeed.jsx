import Post from "../Posts/Post";
const TimeFeed = ({ posts }) => {
  return (
    <>
      {posts?.postsList
        ?.slice(0)
        ?.reverse()
        ?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
    </>
  );
};

export default TimeFeed;

import Post from "../Posts/Post";
const TrendFeed = ({ posts }) => {
  return (
    <>
      {posts?.postsList
        ?.slice(0)
        ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        ?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
    </>
  );
};

export default TrendFeed;

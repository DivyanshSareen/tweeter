import Post from "../Posts/Post";
const TrendFeed = ({ posts }) => {
  console.log(posts.postsList[2].likes.likeCount);
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

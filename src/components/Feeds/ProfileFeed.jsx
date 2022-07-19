import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfilePost from "../Posts/ProfilePost";
import { getPostsByUser } from "../../store/posts/postsSlice";

const ProfileFeed = ({ username }) => {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsByUser(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (posts.status === "fulfilled") {
      dispatch(getPostsByUser(username));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.status]);
  return (
    <>
      {posts?.userPostsList?.map((post) => (
        <ProfilePost key={post?._id} post={post} />
      ))}
    </>
  );
};

export default ProfileFeed;

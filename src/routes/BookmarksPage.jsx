import { useSelector } from "react-redux/es/exports";
import BookmarkPost from "../components/Bookmarks/BookmarkPost";

const BookmarksPage = () => {
  const userInfo = useSelector((store) => store.userInfo);
  return (
    <div className='explore'>
      <h5 className='h5'>Explore</h5>
      {userInfo.userDetails.bookmarks.map((post) => (
        <BookmarkPost post={post} />
      ))}
    </div>
  );
};

export default BookmarksPage;

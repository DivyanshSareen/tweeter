import { useSelector } from "react-redux/es/exports";
import BookmarkPost from "../components/Bookmarks/BookmarkPost";

const BookmarksPage = () => {
  const userInfo = useSelector((store) => store.userInfo);
  console.log(userInfo.userDetails.bookmarks);
  return (
    <div>
      {userInfo.userDetails.bookmarks.map((post) => (
        <BookmarkPost post={post} />
      ))}
    </div>
  );
};

export default BookmarksPage;

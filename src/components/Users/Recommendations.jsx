import { useEffect } from "react";
import User from "./User";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  getListOfUsers,
  filterRecommendedUsers,
} from "../../store/users/usersSlice";
import { updateUserFollowingInfo } from "../../store/userInfoSlice/userInfoSlice";

const Recommendations = () => {
  const users = useSelector((store) => store.users);
  const userInfo = useSelector((store) => store.userInfo);
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.followStatus === "followed") {
      try {
        dispatch(updateUserFollowingInfo(users.updatedUserInfo));
      } finally {
        dispatch(filterRecommendedUsers(userInfo.userDetails));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.followStatus]);

  useEffect(() => {
    dispatch(filterRecommendedUsers(userInfo.userDetails));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.userIsUpdated]);

  useEffect(() => {
    dispatch(getListOfUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn]);

  return (
    <section className='recommend'>
      <h4 className='h6'>Who to Follow?</h4>
      <div className='recommendations'>
        {users.listOfRecommendedUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;

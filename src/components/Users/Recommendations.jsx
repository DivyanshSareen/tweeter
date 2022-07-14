import { useEffect } from "react";
import User from "./User";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getListOfUsers, followUser } from "../../store/users/usersSlice";

const Recommendations = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='recommend'>
      <h4 className='h6'>Who to Follow?</h4>
      <div className='recommendations'>
        {users.listOfUsers.map((user) => (
          <User key={user._id} user={user} followUser={followUser} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;

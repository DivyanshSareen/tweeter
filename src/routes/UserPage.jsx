import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificUser } from "../store/users/usersSlice";
import axios from "axios";

const UserPage = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificUser(params.userId));
  }, [params.userId]);

  return (
    <div className='profile'>
      {users.specificUserStatus === "fulfilled" ? (
        <>
          <div className='avatar avatar-l'>
            <img
              src={require(`../assets/${users?.specificUser?.profilePicture}`)}
              alt='avatar-img'></img>
          </div>
          <h5 className='h5'>
            {users?.specificUser?.firstName} {users?.specificUser?.lastName}
          </h5>
          <p className='sub-title1'>@{users?.specificUser?.username}</p>
          <div className='profile-options'>
            <button className='btn btn-ghost'>Follow</button>
          </div>
          <p className='paragraph1 center-text'>
            {users?.specificUser?.description}
          </p>
          <p className='paragraph2'>
            <a
              target='_blank'
              href={users?.specificUser?.portfolioURL}
              rel='noreferrer'>
              {user?.portfolioURL}
            </a>
          </p>
          <div className='profile-stats'>
            <div className='paragraph1 center-text'>
              {users?.specificUser?.following?.length}
            </div>
            <div className='paragraph1 center-text'>
              {users?.specificUser?.followers?.length}
            </div>
            <div className='paragraph1'>Following</div>
            <div className='paragraph1'>Followers</div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserPage;

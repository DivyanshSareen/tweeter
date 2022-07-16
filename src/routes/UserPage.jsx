import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  let params = useParams();
  let [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`/api/users/${params.userId}`)
      .then((res) => setUser(res.data.user));
  }, [params.userId]);
  return (
    <div className='profile'>
      <div className='avatar avatar-l'>
        <img
          src={require(`../assets/${user.profilePicture}`)}
          alt='avatar-img'></img>
      </div>
      <h5 className='h5'>
        {user.firstName} {user.lastName}
      </h5>
      <p className='sub-title1'>@{user.username}</p>
      <p className='paragraph1 center-text'>{user.description}</p>
      <p className='paragraph2'>
        <a target='_blank' href={user.portfolioURL} rel='noreferrer'>
          {user.portfolioURL}
        </a>
      </p>
      <div className='profile-stats'>
        <div className='paragraph1 center-text'>{user.following.length}</div>
        <div className='paragraph1 center-text'>{user.followers.length}</div>
        <div className='paragraph1'>Following</div>
        <div className='paragraph1'>Followers</div>
      </div>
    </div>
  );
};

export default UserPage;

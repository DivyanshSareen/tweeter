import { useState, useEffect } from "react";
import User from "./User";
import { useSelector, useDispatch } from "react-redux/es/exports";
import axios from "axios";

const Recommendations = () => {
  const [users, setUsers] = useState([]);
  const userInfo = useSelector((store) => store.userInfo);
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.status === "fulfilled") {
      axios.get("/api/users").then((res) => setUsers(res.data.users));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status]);

  return (
    <section className='recommend'>
      <h4 className='h6'>Who to Follow?</h4>
      <div className='recommendations'>
        {users
          .filter((user) => user._id !== userInfo.userDetails._id)
          .map((user) => (
            <User key={user._id} user={user} />
          ))}
      </div>
    </section>
  );
};

export default Recommendations;

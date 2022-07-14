import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Recommendations = () => {
  const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   try {
  //     return await axios.get("api/users").then((res) => console.log(res.data));
  //   } catch (e) {
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <section className='recommend'>
      <h4 className='h6'>Who to Follow?</h4>
      <div className='recommendations'>
        <div className='rec-user'>
          <div className='avatar'>
            <img
              src={require("../../assets/landing1.jpg")}
              alt='avatar-img'></img>
          </div>
          <div className='rec-user-indo'>
            <p className='recc-actual--name'>Banco Banco</p>
            <p className='recc-user--name'>@bancobanco</p>
          </div>
          <div className='rec-options'>
            <button className='btn btn-ghost'>
              <FontAwesomeIcon
                className='sidebar-logo--icon'
                icon={faUserPlus}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Recommendations = () => {
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
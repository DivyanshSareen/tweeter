import { useState } from "react";
import { updateUserProfile } from "../../store/userInfoSlice/userInfoSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ portfolioURL: url, description: bio }));
      }}>
      <div className='text-area'>
        <label className='textarea-label' htmlFor='desc'>
          Description
        </label>
        <textarea
          className='textarea-data'
          cols='40'
          rows='8'
          id='desc'
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          required></textarea>
        <div className='input'>
          <label htmlFor='url' className='input-label'>
            Protfolio URL
          </label>
          <input
            name='url'
            type='text'
            className='input-data'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required></input>
        </div>
        <input type='submit' className='btn btn-ghost' value='save'></input>
      </div>
    </form>
  );
};

export default EditProfile;

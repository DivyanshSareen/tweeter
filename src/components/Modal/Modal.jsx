const Modal = ({ isHidden, setIsHidden, children }) => {
  console.log(children);
  return (
    <div
      className='modal'
      style={isHidden ? { display: "none" } : { display: "flex" }}>
      <div className='modal-form'>{children}</div>
      <button
        className='btn btn-ghost modal-close-btn'
        onClick={() => {
          setIsHidden(true);
        }}>
        X
      </button>
    </div>
  );
};

export default Modal;

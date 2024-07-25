import "../LeftMenuModal/LeftMenuModal.css";

const LeftMenuModal = ({ isLoggedIn, handleLogout }) => {
  return (
    <>
      {isLoggedIn ? (
        <div className="modal leftModal">
          <div className="leftModal__container">
            <div className="leftModal__container_top">
              <h2 className="leftModal__title">Zoan Pets</h2>
            </div>
            <div className="leftModal__container_bottom">
              <button className="leftModal__logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal leftModal">
          <div className="leftModal__container">
            <div className="leftModal__container_top">
              <h1 className="leftModal__title">Main menu{}</h1>
            </div>
            <div className="leftModal__container_bottom"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftMenuModal;

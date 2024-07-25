import "../MainLeftMenu/MainLeftMenu.css";

const MainLeftMenu = ({ handleLogout }) => {
  return (
    <>
      <div className="mainLeftMenu">
        <div className="mainLeftMenu__top">
          <h2 className="mainLeftMenu__title">Zoan Pets</h2>
        </div>
        <div className="mainLeftMenu__bottom">
          <button className="mainLeftMenu__logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default MainLeftMenu;

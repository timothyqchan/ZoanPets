import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ handleLeftMenuModal, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      {isLoggedIn ? (
        <>
          <div className="header__left header__left_logged-in">
            <button
              type="button"
              className="header__button header__button_menu"
              onClick={handleLeftMenuModal}
            >
              ☰
            </button>
          </div>

          <div className="header__right">
            <button
              type="button"
              className="header__button header__button_username"
            >
              test Username{currentUser?.name}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="header__left header__left_logged-out">
            <button
              type="button"
              className="header__button header__button_menu"
              onClick={handleLeftMenuModal}
            >
              ☰
            </button>
            <Link to="/" className="header__link header__link_home">
              <h2 className="header__subtitle">Zoan Pets</h2>
            </Link>
            <Link to="/about" className="header__link header__link_about">
              <h3 className="header__subtitle">About</h3>
            </Link>
          </div>

          <div className="header__right">
            <Link to="/support" className="header__link header__link_support">
              <h3 className="header__subtitle">Support</h3>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

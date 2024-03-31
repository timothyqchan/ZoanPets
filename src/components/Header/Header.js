import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  handleLeftMenuModal,
  handleHeaderUsernameModal,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__info">
        {isLoggedIn ? (
          <>
            <div className="header__left">
              <button
                type="button"
                className="header__button"
                onClick={handleLeftMenuModal}
              >
                ☰
              </button>
              <Link to="/" className="header__link">
                <h2 className="header__title">Zoan Pets</h2>
              </Link>
            </div>

            <div className="header__right">
              <button
                type="button"
                className="header__button"
                onClick={handleHeaderUsernameModal}
              >
                {currentUser?.name}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="header__left">
              <Link to="/" className="header__link">
                <h2 className="header__title">Zoan Pets</h2>
              </Link>
              <Link to="/about" className="header__link">
                <h3 className="header__title">About</h3>
              </Link>
              <Link to="/updates" className="header__link">
                <h3 className="header__title">Updates</h3>
              </Link>
              <Link to="/pets" className="header__link">
                <h3 className="header__title">Pets</h3>
              </Link>
            </div>

            <div className="header__right">
              <Link to="/support" className="header__link">
                <h3 className="header__title">Support</h3>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

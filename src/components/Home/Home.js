import "../Home/Home.css";
import "../Modals/ModalButton.css";

const Home = ({ handleLoginModal, handleRegisterModal }) => {
  return (
    <>
      <main className="home">
        <div className="home__top-screen">
          <div className="home__center-info">
            <h1 className="home__title">Zoan Pets</h1>
            <div className="home__user-buttons">
              <button
                type="button"
                name="register"
                className="modal__button home__button_register"
                onClick={handleRegisterModal}
              >
                Register
              </button>
              <button
                type="button"
                name="login"
                className="modal__button home__button_login"
                onClick={handleLoginModal}
              >
                Login
              </button>
            </div>
          </div>
          <div className="home__background-setting"></div>
          <div className="home__sun"></div>
          <div className="home__sky">
            <div className="home__cloud-left"></div>
            <div className="home__cloud-right-and-koi">
              <div className="home__koi"></div>
              <div className="home__cloud-right"></div>
            </div>
          </div>
        </div>
        <div className="home__other-info"></div>
      </main>
    </>
  );
};

export default Home;

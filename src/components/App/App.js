//* Components
import Main from "../Main/Main";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//* Components - Modals
import LoginModal from "../Modals/LoginModal/LoginModal";
import ConfirmModal from "../Modals/ConfirmModal/ConfirmModal";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import LeftMenuModal from "../Modals/LeftMenuModal/LeftMenuModal";
import EditProfileModal from "../Modals/EditProfileModal/EditProfileModal";
import LeaderboardModal from "../Modals/LeaderboardModal/LeaderboardModal";
import GoalsModal from "../Modals/GoalsModal/GoalsModal";
import PetsModal from "../Modals/PetsModal/PetsModal";
import StoreModal from "../Modals/StoreModal/StoreModal";

//* Components - Error Pages
import Page404 from "../Page404/Page404";

//* CSS
import "./App.css";

//* Contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

//* React dependencies
import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  //* States
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollDisable, setScrollDisable] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory("");

  //* DISABLE SCROLL
  scrollDisable
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  //* CLOSE MODALS
  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleOutsideModalClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      handleCloseModal();
    }
  };

  const addCloseEventListener = () => {
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOutsideModalClick);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setScrollDisable(false);
    document.removeEventListener("keydown", handleEscClose);
  };

  //* CREATE MODALS

  const setScrollDisableToTrue = () => {
    setScrollDisable(true);
  };

  const handleCreateModalFunctions = () => {
    setScrollDisableToTrue();
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("registerModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleLoginModal = () => {
    setActiveModal("loginModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleLeftMenuModal = () => {
    setActiveModal("leftMenuModal");
    addCloseEventListener();
  };

  const handleEditProfileModal = () => {
    setActiveModal("profileModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleLeaderboardModal = () => {
    setActiveModal("leaderboardModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleGoalsModal = () => {
    setActiveModal("goalsModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handlePetsModal = () => {
    setActiveModal("petsModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleStoreModal = () => {
    setActiveModal("storeModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  const handleConfirmModal = () => {
    setActiveModal("confirmModal");
    handleCreateModalFunctions();
    addCloseEventListener();
  };

  // function handleLogin({ email, password }) {
  //   return authorize({ email, password })
  //     .then((res) => {
  //       if (res.token) {
  //         localStorage.setItem("jwt", res.token);
  //         checkToken(res.token)
  //           .then((user) => {
  //             setCurrentUser(user.data);
  //             setIsLoggedIn(true);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //           });
  //       }
  //       handleCloseModal();
  //     })
  //     .catch((err) => {
  //       console.error("Login failed", err);
  //     });
  // }

  function handleLogin() {
    setIsLoggedIn(true);
    handleCloseModal();
    history.push("/main");
  }

  // function handleRegistration({ email, password, name, avatar }) {
  //   return registration({ email, password, name, avatar })
  //     .then((res) => {
  //       if (res) {
  //         localStorage.setItem("jwt", res.token);
  //         checkToken(res.token)
  //           .then((user) => {
  //             setCurrentUser(user);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //           });
  //       }
  //       handleCloseModal();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // const handleEditUser = ({ name, avatar }) => {
  //   profileUpdate({ name, avatar })
  //     .then(({ data }) => {
  //       setCurrentUser(data);
  //       handleCloseModal();
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   if ({ jwt }) {
  //     localStorage.setItem("jwt", jwt);
  //     checkToken(jwt)
  //       .then((res) => {
  //         console.log(res.data);
  //         setIsLoggedIn(true);
  //         setCurrentUser(res.data);
  //       })
  //       .catch((err) => {
  //         console.error(`Token Check use effect: ${err}`);
  //       });
  //   }
  // }, []);

  const handlePasswordPrivateClick = (password) => {
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const getRandomQuote = `“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go." — Dr. Seuss`;

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleCloseModal();
    // localStorage.removeItem("jwt");
    // history.push("/");
  };

  const handleDeleteAccount = () => {
    handleLogout();
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header
          handleLeftMenuModal={handleLeftMenuModal}
          isLoggedIn={isLoggedIn}
        ></Header>
        <Route exact path="/">
          <Home
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
          />
        </Route>
        <Route path="/about">
          <Page404></Page404>
        </Route>
        <Route path="/support">
          <Page404></Page404>
        </Route>
        <ProtectedRoute
          path="/main"
          isLoggedIn={isLoggedIn}
          component={() => (
            <Main
              quoteOfTheDay={getRandomQuote}
              handleLogout={handleLogout}
              handleGoalsModal={handleGoalsModal}
              isLoggedIn={isLoggedIn}
            ></Main>
          )}
        ></ProtectedRoute>
        <Footer />
        {activeModal === "registerModal" && (
          <RegisterModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            handleLoginModal={handleLoginModal}
            handleCreateModal={handleCreateModal}
            handlePasswordPrivateClick={handlePasswordPrivateClick}
            // onSubmit={handleRegistration}
          />
        )}
        {activeModal === "loginModal" && (
          <LoginModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            handleRegisterModal={handleRegisterModal}
            handlePasswordPrivateClick={handlePasswordPrivateClick}
            onSubmit={handleLogin}
          />
        )}
        {activeModal === "leftMenuModal" && (
          <LeftMenuModal
            isOpen={activeModal === "create"}
            isLoggedIn={isLoggedIn}
            handleCloseModal={handleCloseModal}
            handleLogout={handleLogout}
          />
        )}
        {activeModal === "profileModal" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            handleEditProfileModal={handleEditProfileModal}
            handleLeaderboardModal={handleLeaderboardModal}
            handleGoalsModal={handleGoalsModal}
            handlePetsModal={handlePetsModal}
            handleStoreModal={handleStoreModal}
            handleConfirmModal={handleConfirmModal}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "leaderboardModal" && (
          <LeaderboardModal
            handleCloseModal={handleCloseModal}
            handleEditProfileModal={handleEditProfileModal}
            handleLeaderboardModal={handleLeaderboardModal}
            handleGoalsModal={handleGoalsModal}
            handlePetsModal={handlePetsModal}
            handleStoreModal={handleStoreModal}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "goalsModal" && (
          <GoalsModal
            handleCloseModal={handleCloseModal}
            handleEditProfileModal={handleEditProfileModal}
            handleLeaderboardModal={handleLeaderboardModal}
            handleGoalsModal={handleGoalsModal}
            handlePetsModal={handlePetsModal}
            handleStoreModal={handleStoreModal}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "petsModal" && (
          <PetsModal
            handleCloseModal={handleCloseModal}
            handleEditProfileModal={handleEditProfileModal}
            handleLeaderboardModal={handleLeaderboardModal}
            handleGoalsModal={handleGoalsModal}
            handlePetsModal={handlePetsModal}
            handleStoreModal={handleStoreModal}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "storeModal" && (
          <StoreModal
            handleCloseModal={handleCloseModal}
            handleEditProfileModal={handleEditProfileModal}
            handleLeaderboardModal={handleLeaderboardModal}
            handleGoalsModal={handleGoalsModal}
            handlePetsModal={handlePetsModal}
            handleStoreModal={handleStoreModal}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "confirmModal" && (
          <ConfirmModal
            handleCloseModal={handleCloseModal}
            handleDeleteAccount={handleDeleteAccount}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

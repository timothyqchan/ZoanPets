//* Components
import Main from "../Main/Main";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//* Components - Modals
import LoginModal from "../Modals/LoginModal/LoginModal";
import ConfirmModal from "../Modals/ConfirmModal/ConfirmModal";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import EditProfileModal from "../Modals/EditProfileModal/EditProfileModal";

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
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("registerModal");
  };

  const handleLoginModal = () => {
    setActiveModal("loginModal");
  };

  const handleLeftMenuModal = () => {
    setActiveModal("leftMenuModal");
  };

  const handleHeaderUsernameModal = () => {
    setActiveModal("headerUsernameModal");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profileModal");
  };

  const handleConfirmModal = () => {
    setActiveModal("confirmModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
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

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header
          handleLeftMenuModal={handleLeftMenuModal}
          handleHeaderUsernameModal={handleHeaderUsernameModal}
          isLoggedIn={isLoggedIn}
        ></Header>
        {/* <Route exact path="/"> */}
        <Home
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
        />
        {/* </Route> */}
        <ProtectedRoute
          path="/profile"
          isLoggedIn={isLoggedIn}
          component={() => (
            <Profile
              handleEditProfileModal={handleEditProfileModal}
              isLoggedIn={isLoggedIn}
            />
          )}
        ></ProtectedRoute>
        {activeModal === "profileModal" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            // onSubmit={handleEditUser}
          />
        )}
        {activeModal === "registerModal" && (
          <RegisterModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            handleLoginModal={handleLoginModal}
            handleCreateModal={handleCreateModal}
            // onSubmit={handleRegistration}
          />
        )}
        {activeModal === "loginModal" && (
          <LoginModal
            isOpen={activeModal === "create"}
            handleCloseModal={handleCloseModal}
            handleRegisterModal={handleRegisterModal}
            // onSubmit={handleLogin}
          />
        )}
        {activeModal === "confirmModal" && (
          <ConfirmModal handleCloseModal={handleCloseModal} />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

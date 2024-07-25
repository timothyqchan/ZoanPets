import "../ModalInMenu/ModalInMenu.css";
import { useState, useEffect } from "react";
import "../ModalButton.css";

const ModalInMenu = ({
  children,
  onClose,
  handleEditProfileModal,
  handleLeaderboardModal,
  handleGoalsModal,
  handlePetsModal,
  handleStoreModal,
  name,
}) => {
  const yellow =
    "linear-gradient(0deg,rgba(244, 255, 178, 1) 0%,rgba(255, 213, 38, 1) 100%)";
  const gray =
    "linear-gradient(0deg,rgba(255, 255, 255, 1) 0%,rgba(183, 183, 183, 1) 100%)";

  const [profileNavButton, setProfileNavButton] = useState(gray);
  const [leaderboardNavButton, setLeaderboardNavButton] = useState(gray);
  const [goalsNavButton, setGoalsNavButton] = useState(yellow);
  const [petsNavButton, setPetsNavButton] = useState(gray);
  const [storeNavButton, setStoreNavButton] = useState(gray);

  const handleProfileHover = () => {
    setProfileNavButton(yellow);
    setLeaderboardNavButton(gray);
    setGoalsNavButton(gray);
    setPetsNavButton(gray);
    setStoreNavButton(gray);
  };

  function handleProfile() {
    handleEditProfileModal();
  }

  const handleLeaderboardHover = () => {
    setProfileNavButton(gray);
    setLeaderboardNavButton(yellow);
    setGoalsNavButton(gray);
    setPetsNavButton(gray);
    setStoreNavButton(gray);
  };

  function handleLeaderboard() {
    handleLeaderboardModal();
  }

  const handleGoalsHover = () => {
    setProfileNavButton(gray);
    setLeaderboardNavButton(gray);
    setGoalsNavButton(yellow);
    setPetsNavButton(gray);
    setStoreNavButton(gray);
  };

  function handleGoals() {
    handleGoalsModal();
  }

  const handlePetsHover = () => {
    setProfileNavButton(gray);
    setLeaderboardNavButton(gray);
    setGoalsNavButton(gray);
    setPetsNavButton(yellow);
    setStoreNavButton(gray);
  };

  function handlePets() {
    handlePetsModal();
  }

  const handleStoreHover = () => {
    setProfileNavButton(gray);
    setLeaderboardNavButton(gray);
    setGoalsNavButton(gray);
    setPetsNavButton(gray);
    setStoreNavButton(yellow);
  };

  function handleStore() {
    handleStoreModal();
  }

  return (
    <div className={`modal modalmenu modal__type_${name}`}>
      <div className="modalmenu__container">
        <button
          className="modalmenu__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modalmenu__navbar">
          <button
            type="button"
            name="profile"
            style={{ background: `${profileNavButton}` }}
            className="modalmenu__nav_header modalmenu__nav_profile modal__button"
            onClick={handleProfile}
            onMouseOver={handleProfileHover}
          >
            Profile
          </button>
          <button
            type="button"
            name="leaderboard"
            style={{ background: `${leaderboardNavButton}` }}
            className="modalmenu__nav_header modalmenu__nav_leaderboard modal__button"
            onClick={handleLeaderboard}
            onMouseOver={handleLeaderboardHover}
          >
            Leaderboard
          </button>
          <button
            type="button"
            name="goals"
            style={{ background: `${goalsNavButton}` }}
            className="modalmenu__nav_header modalmenu__nav_goals modal__button"
            onClick={handleGoals}
            onMouseOver={handleGoalsHover}
          >
            Goals
          </button>
          <button
            type="button"
            name="pets"
            style={{ background: `${petsNavButton}` }}
            className="modalmenu__nav_header modalmenu__nav_pets modal__button"
            onClick={handlePets}
            onMouseOver={handlePetsHover}
          >
            Pets
          </button>
          <button
            type="button"
            name="store"
            style={{ background: `${storeNavButton}` }}
            className="modalmenu__nav_header modalmenu__nav_store modal__button"
            onClick={handleStore}
            onMouseOver={handleStoreHover}
          >
            Store
          </button>
        </div>
        <div className="modalmenu__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalInMenu;

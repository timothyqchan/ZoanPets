import "../EditProfileModal/EditProfileModal.css";
import ModalInMenu from "../ModalInMenu/ModalInMenu";

const EditProfileModal = ({
  handleCloseModal,
  handleEditProfileModal,
  handleLeaderboardModal,
  handleGoalsModal,
  handlePetsModal,
  handleStoreModal,
  handleConfirmModal,
}) => {
  return (
    <ModalInMenu
      onClose={handleCloseModal}
      handleEditProfileModal={handleEditProfileModal}
      handleLeaderboardModal={handleLeaderboardModal}
      handleGoalsModal={handleGoalsModal}
      handlePetsModal={handlePetsModal}
      handleStoreModal={handleStoreModal}
      name="profile"
    >
      <div className="editProfileModal__grid-container">
        <div className="editProfileModal__grid-section editProfileModal__grid-section1"></div>
        <div className="editProfileModal__grid-section editProfileModal__grid-section2"></div>
        <div className="editProfileModal__grid-section editProfileModal__grid-section3">
          <button
            type="button"
            className="editProfileModal__delete-account"
            onClick={handleConfirmModal}
          >
            Delete Account
          </button>
        </div>
      </div>
    </ModalInMenu>
  );
};

export default EditProfileModal;

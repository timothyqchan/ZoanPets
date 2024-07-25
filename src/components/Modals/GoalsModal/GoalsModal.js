import "../GoalsModal/GoalsModal.css";
import ModalInMenu from "../ModalInMenu/ModalInMenu";

const GoalsModal = ({
  handleCloseModal,
  handleEditProfileModal,
  handleLeaderboardModal,
  handleGoalsModal,
  handlePetsModal,
  handleStoreModal,
}) => {
  return (
    <ModalInMenu
      onClose={handleCloseModal}
      handleEditProfileModal={handleEditProfileModal}
      handleLeaderboardModal={handleLeaderboardModal}
      handleGoalsModal={handleGoalsModal}
      handlePetsModal={handlePetsModal}
      handleStoreModal={handleStoreModal}
      name="goals"
    >
      <div className="goalsModal__grid-container">
        <div className="goalsModal__goals goalsModal__grid-section"></div>
        <div className="goalsModal__streak goalsModal__grid-section"></div>
        <div className="goalsModal__badges goalsModal__grid-section"></div>
      </div>
    </ModalInMenu>
  );
};

export default GoalsModal;

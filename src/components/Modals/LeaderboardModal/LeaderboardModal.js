import "../LeaderboardModal/LeaderboardModal.css";
import ModalInMenu from "../ModalInMenu/ModalInMenu";

const LeaderboardModal = ({
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
      name="leaderboard"
    >
      <div className="leaderboardModal__grid-container">
        <div className="leaderboardModal__grid-section leaderboardModal__grid-section1"></div>
        <div className="leaderboardModal__grid-section leaderboardModal__grid-section2"></div>
      </div>
    </ModalInMenu>
  );
};

export default LeaderboardModal;

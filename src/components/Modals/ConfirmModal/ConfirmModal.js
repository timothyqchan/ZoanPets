import "../ConfirmModal/ConfirmModal.css";

const ConfirmModal = ({ handleCloseModal, handleDeleteAccount }) => {
  return (
    <div className="modal confirmModal">
      <div className="confirmModal__container">
        <h1 className="confirmModal__title">
          We are sorry to see you go!
          <br></br> Are you sure you want to delete your account?
        </h1>
        <div className="confirmModal__buttons">
          <button
            className="confirmModal__button confirmModal__cancel"
            onClick={handleCloseModal}
          >
            CANCEL
          </button>
          <button
            className="confirmModal__button confirmModal__delete"
            onClick={handleDeleteAccount}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

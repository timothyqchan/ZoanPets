import "../StoreModal/StoreModal.css";
import ModalInMenu from "../ModalInMenu/ModalInMenu";

const StoreModal = ({
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
      name="store"
    >
      <div className="storeModal__grid-container">
        <div className="storeModal__grid-section storeModal__store-collection">
          <div className="storeModal__store-collection_header">
            <button className="storeModal__store-collection_button storeModal__store-collection_button_left"></button>
            <h3 className="storeModal__store-collection_title">test{}</h3>
            <button className="storeModal__store-collection_button storeModal__store-collection_button_right"></button>
          </div>
          <ul className="storeModal__store">
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
            <li className="storeModal__store-item-container">
              <button className="storeModal__store_button"></button>
            </li>
          </ul>
        </div>
        <div className="storeModal__grid-section storeModal__store-preview">
          <div className="storeModal__store-item-container storeModal__store-preview-container"></div>
          <div className="storeModal__store-item_info">
            <h3 className="storeModal__store-item_name">name{}</h3>
            <p className="storeModal__store-item_price">price{}</p>
          </div>
          <p className="storeModal__store-item_description">description{}</p>
        </div>
      </div>
    </ModalInMenu>
  );
};

export default StoreModal;

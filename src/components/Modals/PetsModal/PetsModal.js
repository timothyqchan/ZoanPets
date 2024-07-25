import "../PetsModal/PetsModal.css";
import ModalInMenu from "../ModalInMenu/ModalInMenu";
import { useEffect, useState } from "react";

const PetsModal = ({
  handleCloseModal,
  handleEditProfileModal,
  handleLeaderboardModal,
  handleGoalsModal,
  handlePetsModal,
  handleStoreModal,
}) => {
  const [petSelected, setPetSelected] = useState("");

  return (
    <ModalInMenu
      onClose={handleCloseModal}
      handleEditProfileModal={handleEditProfileModal}
      handleLeaderboardModal={handleLeaderboardModal}
      handleGoalsModal={handleGoalsModal}
      handlePetsModal={handlePetsModal}
      handleStoreModal={handleStoreModal}
      name="pets"
    >
      <div className="petsModal__grid-container">
        <div className="petsModal__grid-section petsModal__pets-collection">
          <div className="petsModal__pets-collection_header">
            <button className="petsModal__pets-collection_button petsModal__pets-collection_button_left"></button>
            <h3 className="petsModal__pets-collection_title">test{}</h3>
            <button className="petsModal__pets-collection_button petsModal__pets-collection_button_right"></button>
          </div>
          <ul className="petsModal__pets">
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
            <li className="petsModal__pet-container">
              <button className="petsModal__pet_button"></button>
            </li>
          </ul>
        </div>
        <div className="petsModal__grid-section petsModal__pets-preview">
          <div className="petsModal__pet-container petsModal__pet-preview-container"></div>
          <h3 className="petsModal__pet_name">name{}</h3>
          <p className="petsModal__pet_description">description{}</p>
        </div>
      </div>
    </ModalInMenu>
  );
};

export default PetsModal;

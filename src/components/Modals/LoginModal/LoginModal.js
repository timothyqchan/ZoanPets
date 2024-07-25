import "./LoginModal.css";
import "../RegisterModal/RegisterModal.css";
import "../ModalButton.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({
  handleCloseModal,
  handleRegisterModal,
  handlePasswordPrivateClick,
  onSubmit,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ username, password });
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordPrivateIconChange = (elementId) => {
    const button = document.getElementById(elementId);
    if (button.className === "show-password") {
      button.classList.replace("show-password", "hide-password");
    } else if (button.className === "hide-password") {
      button.classList.replace("hide-password", "show-password");
    } else {
      console.log("passwordPrivateIconChange Error!");
    }
  };

  return (
    <ModalWithForm
      title={""}
      button={
        <button
          className="modal__button modalFormLogin__button_submit"
          type="submit"
        >
          Login
        </button>
      }
      buttonText={"Login"}
      buttonTextAlt={"Register"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      name="login"
    >
      <div className="modalFormLogin__top-buttons">
        <button
          className="modal__button modalFormLogin__button-alt"
          type="button"
          onClick={handleRegisterModal}
        >
          Register
        </button>
        <button
          className="modal__button modalFormLogin__lookalikebutton"
          type="button"
        >
          Login
        </button>
      </div>
      <div className="modalFormLogin__info">
        <label className="modalFormLogin__label">Username</label>
        <input
          className="modalFormLogin__input"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          id="username"
          minLength="3"
          maxLength="30"
          onChange={handleUsernameChange}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          // required
        ></input>
        <label htmlFor="password" className="modalFormLogin__label">
          Password
        </label>
        <div className="modalFormLogin__password-input">
          <input
            className="modalFormLogin__input"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            id="password"
            minLength="8"
            maxLength="30"
            onChange={handlePasswordChange}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            // required
          ></input>
          <button
            type="button"
            className="show-password"
            id="passwordPrivateIcon"
            onClick={() => {
              handlePasswordPrivateClick(document.getElementById("password"));
              handlePasswordPrivateIconChange("passwordPrivateIcon");
            }}
          ></button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;

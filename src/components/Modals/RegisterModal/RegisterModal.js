import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import "../ModalButton.css";
import "../RegisterModal/RegisterModal.css";

const RegisterModal = ({
  handleCloseModal,
  handleLoginModal,
  handlePasswordPrivateClick,
  onSubmit,
  isOpen,
}) => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [password2, setPassword2] = useState("");
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
    setAvatar(
      "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
    );
  }, [isOpen]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, password2, email, avatar });
  };

  return (
    <ModalWithForm
      title={""}
      button={
        <button
          className="modal__button modalFormRegister__button_submit"
          type="submit"
        >
          Join now
        </button>
      }
      onClose={handleCloseModal}
      buttonText={"Register"}
      buttonTextAlt={"Login"}
      onSubmit={handleSubmit}
      name="register"
    >
      <div className="modalFormRegister__top-buttons">
        <button
          className="modal__button modalFormRegister__lookalikebutton"
          type="button"
        >
          Register
        </button>
        <button
          className="modal__button modalFormRegister__button-alt"
          type="button"
          onClick={handleLoginModal}
        >
          Log In
        </button>
      </div>
      <div className="modalFormRegister__info">
        <label htmlFor="name" className="modalFormRegister__label">
          Username
        </label>
        <input
          className="modalFormRegister__input"
          placeholder="Username"
          type="name"
          required
          name="username"
          id="username"
          minLength="3"
          maxLength="30"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <label htmlFor="password" className="modalFormRegister__label">
          Password
        </label>
        <div className="modalFormRegister__password-input">
          <input
            id="password"
            className="modalFormRegister__input"
            placeholder="Password"
            type="password"
            required
            name="password"
            minLength="8"
            maxLength="30"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <button
            type="button"
            className="show-password"
            id="passwordPrivateIcon"
            onClick={() => {
              handlePasswordPrivateClick(document.getElementById("password"));
              handlePasswordPrivateClick(document.getElementById("password2"));
              handlePasswordPrivateIconChange("passwordPrivateIcon");
              handlePasswordPrivateIconChange("passwordPrivateIcon2");
            }}
          ></button>
        </div>
        <label htmlFor="password" className="modalFormRegister__label">
          Re-enter Password
        </label>
        <div className="modalFormRegister__password-input">
          <input
            id="password2"
            className="modalFormRegister__input"
            placeholder="Re-enter password"
            type="password"
            required
            name="password2"
            minLength="8"
            maxLength="30"
            value={password2}
            onChange={handlePassword2Change}
          ></input>
          <button
            type="button"
            className="show-password"
            id="passwordPrivateIcon2"
            onClick={() => {
              handlePasswordPrivateClick(document.getElementById("password"));
              handlePasswordPrivateClick(document.getElementById("password2"));
              handlePasswordPrivateIconChange("passwordPrivateIcon");
              handlePasswordPrivateIconChange("passwordPrivateIcon2");
            }}
          ></button>
        </div>
        <label htmlFor="email" className="modalFormRegister__label">
          Email
        </label>
        <input
          id="email"
          className="modalFormRegister__input"
          placeholder="Email"
          type="email"
          required
          name="email"
          minLength="1"
          maxLength="30"
          value={email}
          onChange={handleEmailChange}
        ></input>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;

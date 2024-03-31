import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({
  handleCloseModal,
  handleLoginModal,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, password2, email, avatar });
  };

  return (
    <ModalWithForm
      title={"Register"}
      button={
        <button className="modal__button" type="submit">
          Join now
        </button>
      }
      onClose={handleCloseModal}
      buttonText={"Register"}
      buttonTextAlt={"Login"}
      onSubmit={handleSubmit}
    >
      <p className="modal__lookalikebutton">Register</p>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleLoginModal}
      >
        Log In
      </button>
      <label htmlFor="name" className="modal__label">
        Username
      </label>
      <input
        className="modal__input"
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
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        id="password"
        className="modal__input"
        placeholder="Password"
        type="password"
        required
        name="password"
        minLength="8"
        maxLength="30"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <label htmlFor="password" className="modal__label">
        Re-enter Password
      </label>
      <input
        id="password2"
        className="modal__input"
        placeholder="Re-enter password"
        type="password"
        required
        name="password2"
        minLength="8"
        maxLength="30"
        value={password2}
        onChange={handlePassword2Change}
      ></input>
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        id="email"
        className="modal__input"
        placeholder="Email"
        type="email"
        required
        name="email"
        minLength="1"
        maxLength="30"
        value={email}
        onChange={handleEmailChange}
      ></input>
    </ModalWithForm>
  );
};

export default RegisterModal;

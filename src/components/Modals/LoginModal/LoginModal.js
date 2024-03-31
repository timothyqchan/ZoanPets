import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ handleCloseModal, handleRegisterModal, onSubmit }) => {
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

  return (
    <ModalWithForm
      title={"Log in"}
      button={
        <button className="modal__button" type="submit">
          Login
        </button>
      }
      buttonText={"Login"}
      buttonTextAlt={"Register"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleRegisterModal}
      >
        Register
      </button>
      <p className="modal__lookalikebutton">Login</p>
      <label className="modal__label">Username</label>
      <input
        className="modal__input"
        placeholder="Username"
        type="text"
        name="username"
        value={username}
        id="username"
        minLength="3"
        maxLength="30"
        onChange={handleUsernameChange}
      ></input>
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        className="modal__input"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        id="password"
        minLength="8"
        maxLength="30"
        onChange={handlePasswordChange}
      ></input>
    </ModalWithForm>
  );
};

export default LoginModal;

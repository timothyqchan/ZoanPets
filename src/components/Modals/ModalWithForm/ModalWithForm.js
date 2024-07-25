import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  button,
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modalForm modal__type_${name}`}>
      <div className="modalForm__container">
        <button
          className="modalForm__close"
          type="button"
          onClick={onClose}
        ></button>
        <h1 className="modalForm__title">{title}</h1>
        <form className="modalForm__form" onSubmit={onSubmit}>
          {children}
          <div className="modalForm__buttons">{button}</div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

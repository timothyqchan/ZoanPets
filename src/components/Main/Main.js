import "../Main/Main.css";
import MainLeftMenu from "../MainLeftMenu/MainLeftMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Main({ quoteOfTheDay, handleLogout, handleGoalsModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <MainLeftMenu handleLogout={handleLogout}></MainLeftMenu>
      <main className="main">
        <section className="main__user-pets">
          <h3 className="main__quote-of-the-day">{quoteOfTheDay}</h3>
          <div className="main__user-pet"></div>
        </section>
        <button className="main__button_goals" onClick={handleGoalsModal}>
          <div className="main__button_plus">+</div>
        </button>
      </main>
    </>
  );
}

export default Main;

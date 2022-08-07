// modules
import React, { FC, useState } from "react";
import Swal from "sweetalert2";

// styles
import "views/views-style-modules/GreetingPage.css";

// components
import Link from "components/Utils/CustomLink";
import Button from "components/Utils/Button";

// data
import { useData } from "context";

const GreetingPage: FC = () => {
  const [playerName, setPlayerName] = useState("");

  const data = useData();
  const isNameExist = data?.data.name;

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const setPlayerNameHandler = () => {
    data?.actions.insertName(playerName);
    setPlayerName("");
  };

  const correctPath = !isNameExist ? "/" : "/choise";

  const checkAreActiveOptsExist = () => {
    if (!isNameExist) {
      Swal.fire("You haven't set your name !");
    }
  };

  return (
    <div className="greeting-box">
      <h1 className="greeting-page-title">Scissors Rock Paper</h1>
      <p className="instructions">
        ***************************************
        <br />
        Dear friend glad to see you here !<br />
        Before you start check out this short guide
        <br />
        First of all set your name or nickname
        <br />
        On the next page you need to place a bet
        <br />
        You can only bet on one or two positions
        <br />
        At the same time, when betting on one position, the coefficient is <b>"14"</b>
        <br />
        But if a bet is made on two positions, then the coefficient is <b>"3"</b>
        <br />
        After the bets have taken place
        <br />
        Press the button "Start Game" and go to the final page
        <br />
        Good luck and enjoy the game! ***************************************
      </p>
      <div className="set-name-box">
        <input
          type="text"
          name="name"
          value={playerName}
          className="set-name-box__input"
          onChange={inputNameHandler}
        />
        <Button extendClassName="set-name-box__button" onClick={setPlayerNameHandler}>
          Set name
        </Button>
      </div>
      <Link
        to={correctPath}
        extendClassName="greeting-page__link"
        onClick={checkAreActiveOptsExist}>
        Let's go
      </Link>
    </div>
  );
};

export default GreetingPage;

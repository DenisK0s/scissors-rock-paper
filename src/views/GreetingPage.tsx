// modules
import React, { FC, useState } from "react";

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

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const setPlayerNameHandler = () => {
    data?.actions.insertName(playerName);
    setPlayerName("");
  };

  return (
    <div className="greeting-box">
      <h1>Scissors Rock Paper</h1>
      <p className="instructions"></p>
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
      <Link to="/choise">Let's go</Link>
    </div>
  );
};

export default GreetingPage;

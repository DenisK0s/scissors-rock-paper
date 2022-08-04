// modules
import React, { FC } from "react";
// import { Link } from "react-router-dom";

// styles
import "views/views-style-modules/GreetingPage.css";

// components
import Link from "components/Utils/CustomLink";

const GreetingPage: FC = () => {
  return (
    <div className="greeting-box">
      <h1>Scissors Rock Paper</h1>
      <p className="instructions"></p>
      <Link to="/choise">Let's go</Link>
    </div>
  );
};

export default GreetingPage;

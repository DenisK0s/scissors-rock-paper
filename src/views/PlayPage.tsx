// modules
import { FC, useState, useRef } from "react";
import { useData } from "context";
import Swal from "sweetalert2";

// styles
import "views/views-style-modules/PlayPage.css";

// components
import Button from "components/Utils/Button";
import Link from "components/Utils/CustomLink";
import BetContent from "components/BetContent";
import BetResults from "components/BetResults";

// helpers
import { getRandomBet } from "helpers/getRandomBet";
import { compareBets } from "helpers/compareBets";

// types
import { IOption } from "types/commonTypes";

const PlayPage: FC = () => {
  const [isResult, setIsResult] = useState(false);
  const [resultOption, setResultOption] = useState("");
  const [counter, setCounter] = useState<number>(0);
  const data = useData();
  const randomBet = useRef(getRandomBet());
  let timerId: any;

  const playerName = data?.data.name;
  const options = data?.data.options;
  const activeOptions = options?.filter((opt) => opt.bet !== 0) as IOption[];
  const computerBet = randomBet.current;

  const timer = (cb: any) => {
    let counter = 0;
    timerId = setInterval(() => {
      counter++;
      setCounter((prevValue) => (prevValue += 1));
      if (counter === 3) {
        cb();
        setIsResult(true);
      }
    }, 1000);
  };

  const playHandler = () => {
    clearInterval(timerId);
    const isSinleBetOption = activeOptions?.length === 1;

    if (isSinleBetOption) {
      const playerBet = activeOptions[0].bet;
      const playerBetOption = activeOptions[0].optionName;

      const playResult = compareBets(playerBetOption, computerBet);

      setResultOption(playerBetOption);

      if (playResult === "won") {
        const increasedBet = playerBet * 14;
        data?.actions.takeWinningAmount(increasedBet);

        console.log("you won", increasedBet);
        Swal.fire({
          position: "center",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.increaseBalance(increasedBet);
      }

      if (playResult === "loss") {
        Swal.fire({
          position: "center",
          title: "Unfortunately this time you lost",
          showConfirmButton: false,
          timer: 1500,
        });
        data?.actions.decreaseBalance(playerBet);
      }
    }

    const isOneBetOptionEqual = activeOptions?.some((bet) => bet.optionName === computerBet);

    if (isOneBetOptionEqual && activeOptions.length === 2) {
      const notEqualOption = activeOptions?.find(
        (bet) => bet.optionName !== computerBet
      ) as IOption;
      const playerBet = notEqualOption.bet;
      const playerBetOption = notEqualOption.optionName;

      const playResult = compareBets(playerBetOption, computerBet);

      setResultOption(playerBetOption);

      if (playResult === "won") {
        const increasedBet = playerBet * 3;

        Swal.fire({
          position: "top-end",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.takeWinningAmount(increasedBet);
        data?.actions.increaseBalance(increasedBet);
      }

      if (playResult === "loss") {
        Swal.fire({
          position: "center",
          title: "Unfortunately this time you lost",
          showConfirmButton: false,
          timer: 1500,
        });
        data?.actions.decreaseBalance(playerBet);
      }
    }

    if (!isOneBetOptionEqual && activeOptions.length === 2) {
      const playerBet1 = activeOptions[0].bet;
      const playerBetOption1 = activeOptions[0].optionName;

      const playerBet2 = activeOptions[1].bet;
      const playerBetOption2 = activeOptions[1].optionName;

      const playResults1 = compareBets(playerBetOption1, computerBet);
      const playResults2 = compareBets(playerBetOption2, computerBet);

      if (playResults1 === "won") {
        setResultOption(playerBetOption1);
        const increasedBet = playerBet1 * 3;

        Swal.fire(`Congratulations you won ${increasedBet}`);

        data?.actions.takeWinningAmount(increasedBet);
        data?.actions.increaseBalance(increasedBet);
      }

      if (playResults2 === "won") {
        setResultOption(playerBetOption2);
        const increasedBet = playerBet2 * 3;

        Swal.fire(`Congratulations you won ${increasedBet}`);
        data?.actions.takeWinningAmount(increasedBet);
        data?.actions.increaseBalance(increasedBet);
      }

      if (playResults1 === "loss") {
        Swal.fire({
          position: "center",
          title: "Unfortunately this time you lost",
          showConfirmButton: false,
          timer: 1500,
        });
        data?.actions.decreaseBalance(playerBet1);
      }

      if (playResults2 === "loss") {
        Swal.fire({
          position: "center",
          title: "Unfortunately this time you lost",
          showConfirmButton: false,
          timer: 1500,
        });
        data?.actions.decreaseBalance(playerBet2);
      }
    }
  };

  return (
    <div className="play-page-content-wrapper">
      <Link to="/choise" extendClassName="play-page__next-round-link">
        New round
      </Link>
      <BetContent playerName={playerName} betOptions={activeOptions} />
      <div className="bet-results-box__wrapper">
        {isResult ? (
          <BetResults playerOption={resultOption} computerOption={computerBet} />
        ) : (
          <div className="waiting-results-box">{counter}</div>
        )}
      </div>
      <Button extendClassName="play-page__button" onClick={() => timer(playHandler)}>
        Play
      </Button>
    </div>
  );
};

export default PlayPage;

// modules
import { FC, useState, useRef } from "react";
import { useData } from "context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

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

// options
import coefficients from "options/coefficients";

const PlayPage: FC = () => {
  const [isResult, setIsResult] = useState(false);
  const [resultOption, setResultOption] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [counter, setCounter] = useState<number>(0);
  const data = useData();
  const randomBet = useRef(getRandomBet());
  const navigate = useNavigate();
  let timerId: any;

  const playerName = data?.data.name;
  const options = data?.data.options;
  const balance = data?.data.balance;

  if (balance === 0) {
    (() => {
      let counter = 0;
      let zуroBalanceTimerId = setInterval(() => {
        counter++;
        if (counter === 2) {
          Swal.fire({
            title: "Unfortunately your balance is 0?",
            confirmButtonColor: "rgba(118, 255, 3, 0.6)",
            confirmButtonText: "Start new game!",
          }).then((result) => {
            if (result.isConfirmed) {
              data?.actions.startNewGame();
              navigate("/");
            }
          });
        }
        if (counter === 2) {
          clearInterval(zуroBalanceTimerId);
        }
      }, 2000);
    })();
  }
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
        setResultStatus("won");
        const increasedBet = playerBet * coefficients.SUPER_COEFICIENT;
        data?.actions.takeWinningAmount(increasedBet);
        Swal.fire({
          position: "center",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.increaseBalance(increasedBet);
      }

      if (playResult === "loss") {
        setResultStatus("loss");
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
        setResultStatus("won");
        const increasedBet = playerBet * coefficients.BASE_COEFICIENT;
        data?.actions.takeWinningAmount(increasedBet);

        Swal.fire({
          position: "center",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.increaseBalance(increasedBet);
      }

      if (playResult === "loss") {
        setResultStatus("loss");
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
        setResultStatus("won");
        setResultOption(playerBetOption1);
        const increasedBet = playerBet1 * coefficients.BASE_COEFICIENT;
        data?.actions.takeWinningAmount(increasedBet);

        Swal.fire({
          position: "center",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.increaseBalance(increasedBet);
      }

      if (playResults2 === "won") {
        setResultStatus("won");
        setResultOption(playerBetOption2);
        const increasedBet = playerBet2 * coefficients.BASE_COEFICIENT;
        data?.actions.takeWinningAmount(increasedBet);

        Swal.fire({
          position: "center",
          title: `Congratulations you won ${increasedBet}`,
          showConfirmButton: false,
          timer: 1500,
        });

        data?.actions.increaseBalance(increasedBet);
      }
    }
  };

  const resetBets = () => data?.actions.resetAllactiveBets();

  return (
    <div className="play-page-content-wrapper">
      <Confetti tweenDuration={10000} run={resultStatus === "won"} recycle={false} />
      <Link to="/choise" extendClassName="play-page__next-round-link" onClick={resetBets}>
        New round
      </Link>
      <BetContent playerName={playerName} betOptions={activeOptions} />
      <div className="bet-results-box__wrapper">
        {isResult ? (
          <BetResults
            playerOption={resultOption}
            computerOption={computerBet}
            result={resultStatus}
          />
        ) : (
          <div className="waiting-results-box">
            <p className="waiting-results-counter">{counter}</p>
          </div>
        )}
      </div>
      <Button
        extendClassName="play-page__button"
        onClick={() => timer(playHandler)}
        disabled={isResult}>
        Play
      </Button>
    </div>
  );
};

export default PlayPage;

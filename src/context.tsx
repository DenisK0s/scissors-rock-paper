// modules
import { createContext, FC, useState, useContext } from "react";
import Swal from "sweetalert2";

// types
import { IData, IActions, DataContextType } from "types/contextDataTypes";

interface DataProviderProps {
  children?: React.ReactNode;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [bet, setBet] = useState(500);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(5000);

  const makeBet = (value: number) => setBet(value);
  const chooseOption = (value: string) => setSelectedOption(value);
  const insertName = (value: string) => setName(value);
  const increaseBet = () => {
    if (bet === balance) {
      Swal.fire("Not enough balance !");
      return;
    }
    setBet((prevBet) => (prevBet += 500));
  };
  const decreaseBet = () => {
    if (bet <= 500) {
      Swal.fire("Bet can't be less than 500 !");
      return;
    }
    setBet((prevBet) => (prevBet -= 500));
  };

  const data: IData = {
    bet,
    selectedOption,
    name,
    balance,
  };

  const actions: IActions = {
    makeBet,
    chooseOption,
    insertName,
    increaseBet,
    decreaseBet,
  };

  return <DataContext.Provider value={{ data, actions }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

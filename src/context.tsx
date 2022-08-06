// modules
import { createContext, FC, useState, useContext } from "react";
import Swal from "sweetalert2";

// types
import { IData, IActions, DataContextType } from "types/contextDataTypes";
import { IOption } from "types/commonTypes";

import { optsData } from "./options/optsData";

interface DataProviderProps {
  children?: React.ReactNode;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [betsAmount, setBetsAmount] = useState<number>(0);
  const [options, setOptions] = useState<IOption[]>(optsData);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(5000);
  const [winningAmount, setWinningAmount] = useState<number>(0);

  const isbetsAmountMoreThanBalance = betsAmount >= balance;
  const activeOpts = options?.filter((opt) => opt.bet !== 0) as IOption[];
  const activeOptsQuantity = activeOpts.length;

  const insertName = (value: string) => setName(value);
  const increaseOptionBet = (id: string) => {
    if (isbetsAmountMoreThanBalance) {
      Swal.fire("bets amount can't be more than current balance !");
      return;
    }

    const updatedOpts = options.map((opt) => {
      if (opt.id === id) {
        if (opt.bet === balance) {
          Swal.fire("Not enough balance !");
        }

        // if (activeOpts.length === 2) {
        //   Swal.fire("You can only bet on two options !");
        //   return opt;
        // }

        const increasedBet = (opt.bet += 500);

        setBetsAmount((prevBetsAmount) => prevBetsAmount + 500);

        const newOPts = { ...opt, bet: increasedBet };

        return newOPts;
      }

      return opt;
    }) as any[];

    setOptions(updatedOpts);
  };
  const decreaseOptionBet = (id: string) => {
    const updatedOpts = options.map((opt) => {
      if (opt.id === id) {
        setBetsAmount((prevBetsAmount) => prevBetsAmount - 500);

        const newOPts = { ...opt, bet: opt.bet -= 500 };

        return newOPts;
      }

      return opt;
    }) as any[];

    setOptions(updatedOpts);
  };
  const getCurrentOptBet = (id: string) => {
    const findedOpts = options.find((opt) => opt.id === id) as IOption;

    return findedOpts.bet;
  };
  const increaseBalance = (value: number) => {
    setBalance((prevBalance) => (prevBalance += value));
  };
  const decreaseBalance = (value: number) => {
    setBalance((prevBalance) => (prevBalance -= value));
  };
  const takeWinningAmount = (value: number) => {
    setWinningAmount(value);
  };

  const data: IData = {
    betsAmount,
    options,
    name,
    balance,
    activeOptsQuantity,
    winningAmount,
  };

  const actions: IActions = {
    insertName,
    getCurrentOptBet,
    // getActiveOptions,
    increaseOptionBet,
    decreaseOptionBet,
    increaseBalance,
    decreaseBalance,
    takeWinningAmount,
  };

  return <DataContext.Provider value={{ data, actions }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

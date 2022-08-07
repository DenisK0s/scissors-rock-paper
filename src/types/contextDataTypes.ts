import { IOption } from "./commonTypes";
export interface IData {
  betsAmount: number | null;
  options: IOption[];
  name: string;
  balance: number;
  activeOptsQuantity: number;
  winningAmount: number;
}

export interface IActions {
  insertName: (value: string) => void;
  getCurrentOptBet: (id: string) => number;
  increaseOptionBet: (id: string) => void;
  decreaseOptionBet: (id: string) => void;
  increaseBalance: (value: number) => void;
  decreaseBalance: (value: number) => void;
  takeWinningAmount: (value: number) => void;
  resetAllactiveBets: () => void;
  startNewGame: () => void;
  getCurrentBalance: () => number;
}

export type DataContextType = {
  data: IData;
  actions: IActions;
};

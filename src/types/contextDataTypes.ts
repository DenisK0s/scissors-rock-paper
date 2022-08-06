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
  // getActiveOptions: () => IOption[];
  increaseOptionBet: (id: string) => void;
  decreaseOptionBet: (id: string) => void;
  increaseBalance: (value: number) => void;
  decreaseBalance: (value: number) => void;
  takeWinningAmount: (value: number) => void;
}

export type DataContextType = {
  data: IData;
  actions: IActions;
};

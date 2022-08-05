export interface IData {
  bet: number;
  selectedOption: string;
  name: string;
  balance: number;
}

export interface IActions {
  makeBet: (value: number) => void;
  chooseOption: (value: string) => void;
  insertName: (value: string) => void;
  increaseBet: () => void;
  decreaseBet: () => void;
}

export type DataContextType = {
  data: IData;
  actions: IActions;
};

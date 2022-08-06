const betOpts: string[] = ["Scissors", "Rock", "Paper"];

export const getRandomBet = (): string => {
  const randon = Math.floor(Math.random() * (4 - 1) + 1);
  return betOpts[randon - 1];
};

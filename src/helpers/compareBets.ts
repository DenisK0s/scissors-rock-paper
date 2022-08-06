const comparisonBets = (value: string): string => {
  let result = "";

  switch (value) {
    case "Scissors vs Paper":
      result = "won";
      break;

    case "Paper vs Scissors":
      result = "loss";
      break;

    case "Rock vs Scissors":
      result = "won";
      break;

    case "Scissors vs Rock":
      result = "loss";
      break;

    case "Paper vs Rock":
      result = "won";
      break;

    case "Rock vs Paper":
      result = "loss";
      break;

    default:
      console.log("Invalid option");
  }

  return result;
};

const createComparisonString = (string1: string, srting2: string) => {
  return `${string1} vs ${srting2}`;
};

export const compareBets = (playerBet: string, computerBet: string) => {
  if (playerBet === computerBet) {
    return "loss";
  }

  const comparisonString = createComparisonString(playerBet, computerBet);
  console.log("comparisonString", comparisonString);

  const comparisonResult = comparisonBets(comparisonString);
  console.log("comparisonResult", comparisonResult);

  return comparisonResult;
};

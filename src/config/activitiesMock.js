import { compareDesc } from "date-fns";
import { contacts } from "./contactsMock";
import { generateRandomDOB } from "./utils";

export const getTransactions = () => {
  const randomFloatValue = (min, max) => {
    return Math.random() * (max - min + 1) + min;
  };
  const transactions = [];

  for (let i = 0; i < 100; i++) {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const randomSignal = Math.round(Math.random());
    const randomValue = randomFloatValue(10, 500);

    const { first_name, last_name, email } = contacts.find((contact) => contact.id === randomId);
    transactions.push({
      id: i,
      contact: {
        name: `${first_name} ${last_name}`,
        email,
      },
      value: randomSignal ? randomValue : -(randomValue),
      timestamp: generateRandomDOB(),
    });
  }

  return transactions.sort((a, b) => compareDesc(a.timestamp, b.timestamp));
};

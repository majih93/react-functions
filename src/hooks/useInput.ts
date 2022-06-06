import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string) => {
  const [userInput, setUserInput] = useState(initialValue);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  return { userInput, onInputChange };
};

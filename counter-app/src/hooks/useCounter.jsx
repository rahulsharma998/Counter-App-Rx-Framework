import { useEffect, useState } from "react";
import { actions, createCountModel } from "../model/countModel";
import { keyboardCount } from "../intent/countIntent";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    const subscription = createCountModel().subscribe(setCount);
    const removeIntent = keyboardCount(actions);

    return () => {
      subscription.unsubscribe();
      removeIntent();
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (autoIncrement) {
      intervalId = setInterval(() => {
        actions.increment$.next();
      }, 1100);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoIncrement]);

  return {
    count,
    autoIncrement,
    onIncrement: () => actions.increment$.next(),
    onDecrement: () => actions.decrement$.next(),
    onReset: () => actions.reset$.next(),
    onToggleAuto: () => {setAutoIncrement((prev) => !prev)},
  };
};

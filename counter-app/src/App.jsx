import { useCounter } from "./hooks/useCounter";
import CounterView from "./view/counterView";  

export default function App() {
  const { count, autoIncrement, onIncrement, onDecrement, onReset, onToggleAuto } = useCounter();

  return (
    <CounterView
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onReset={onReset}
      onToggleAuto={onToggleAuto}
      autoIncrement={autoIncrement}
    />
  );
}

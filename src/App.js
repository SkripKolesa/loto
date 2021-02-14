import './App.css';
import Bochka from "./components/Bochka/Bochka";
import {makeShuffleRangeIterator} from "./service/ShuffledNumbers";
import {useState} from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import History from "./components/History/History";

export default function App() {
  const [items, setItems] = useState(makeShuffleRangeIterator());
  const [current, setCurrent] = useState(null);
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const onReset = e => {
    setItems(makeShuffleRangeIterator());
    setCurrent(null);
    setCount(0);
    setHistory([]);
  };
  const onNext = e => {
    const next = items.next();
    if (!next.done) {
      setCurrent(next.value);
      setCount(count + 1);
      setHistory([...history, next.value]);
    }
    else {
      setCurrent("XX");
    }
  };
  return (
    <div className={"App"}>
      <Button onClick = {onReset}>Reset</Button>
      <Bochka current={current}/>
      <Button onClick={onNext}>Next</Button>
      <Counter count={count}/>
      <History history={history}/>
    </div>
  );
}

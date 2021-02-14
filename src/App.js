import './App.css';
import Bochka from "./components/Bochka/Bochka";
import {makeShuffleRangeIterator} from "./service/ShuffledNumbers";
import {useState} from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import History from "./components/History/History";

export default function App(props) {
  const [items, setItems] = useState(makeShuffleRangeIterator());
  const [current, setCurrent] = useState(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState([]);
  const onReset = e => {
    setItems(makeShuffleRangeIterator());
    setCurrent(null);
    setCount(0);
    setDone(false);
    setHistory([]);
  };
  const onNext = e => {
    const next = items.next();
    setDone(next.done);
    if (!next.done) {
      setCurrent(next.value);
      setCount(count + 1);
      setHistory([...history, next.value]);
    }
    else {
      alert("DONE");
    }
  };
  //TODO history into separate components
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

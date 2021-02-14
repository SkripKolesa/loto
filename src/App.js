import logo from './logo.svg';
import './App.css';
import * as React from "react";
import Bochka from "./components/Bochka/Bochka";
import {makeShuffleRangeIterator} from "./service/ShuffledNumbers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.bochkas = this.initBochkas();
    this.state = {
      currentBochka: null
    }
  }

  render() {
    return (
      <div className={"App"}>
        <button>Reset</button>
        <Bochka current={this.state.currentBochka}/>
        <button>Next</button>
      </div>
    )
  }

  initBochkas() {
    return makeShuffleRangeIterator();
  }
}

export default App;

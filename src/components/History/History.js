import "./History.css"
import {useState} from "react";

export default function History(props) {
  return (
    <div>
      <ul className={"History"}>
        {props.history.map((h, idx) => <li key={idx}>{h}</li>)}
      </ul>
    </div>
  )
}

import * as React from "react";
import "./Bochka.css"

export default function Bochka(props) {
  return (
    <div className={"Bochka"}>{props.current || "--"}</div>
  )

}

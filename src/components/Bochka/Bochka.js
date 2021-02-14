import * as React from "react";
import "./Bochka.css"

export default function Bochka({current}) {
  return (
    <div className={"Bochka"}>{current || "--"}</div>
  )
}

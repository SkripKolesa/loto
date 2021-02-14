import * as React from "react";
import "./Bochka.css"

class Bochka extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className={"Bochka"}>{this.props.current || "--"}</div>
    )
  }
}

export default Bochka

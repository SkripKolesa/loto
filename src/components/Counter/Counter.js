import "./Counter.css"
export default function Counter({count}){
  return(
    <h2 className={"Counter"}>{count}/90 (:{90 - count})</h2>
  )
}

import "./History.css"

export default function History({history}) {
  return (
    <div>
      <ul className={"History"}>
        {history.map((h, idx) => <li key={idx}>{h}</li>)}
      </ul>
    </div>
  )
}

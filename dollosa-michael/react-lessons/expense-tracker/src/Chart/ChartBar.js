import "./Chartbar.css"

const ChartBar = (props) => {
  let barFillHeight = "0%"
  if(props.maxValue > 0){
    barFillHeight = Math.round((props.value.value / props.maxValue) * 100) + "%"
  }

  return(
    <div className="chart-bar" data-testid="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight, backgroundColor: "red"}}>
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar
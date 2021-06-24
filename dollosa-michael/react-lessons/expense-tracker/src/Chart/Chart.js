import "./Chart.css"
import ChartBar from "./ChartBar.js"

const Chart = (props) => {
  
  
  const dataPointValues = props.dataPoints.map((dataPoint, index) => {
    return dataPoint.value
  })

  const totalMaximum = Math.max(...dataPointValues)

  return(
    <div className="chart">
    {props.dataPoints.map((dataPoint, index) => {
        return <ChartBar key={index} value={dataPoint} maxValue={totalMaximum} label={dataPoint.label} />
      })}
    </div>
  )
}

export default Chart
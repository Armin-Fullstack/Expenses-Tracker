
const BarChart = ({totalMax , chartDataPointValue , chartDataPointLabel}) => {
    let barChartHeight = "0%"
    if(totalMax > 0) {
       barChartHeight = Math.round((chartDataPointValue / totalMax) * 100) + "%"
    }
    return (
            <div className="flex flex-col">
            <div className="w-full h-full bg-violet-400 rounded-full border border-black flex flex-col justify-end overflow-hidden">
                <div className="bg-blue-400 " style={{height: barChartHeight}}></div>
            </div>
            <span>{chartDataPointLabel}</span>
            </div>
    )
}

export default BarChart;
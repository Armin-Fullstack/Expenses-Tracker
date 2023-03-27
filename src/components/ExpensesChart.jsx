import BarChart from "./BarChart";
const ExpensesChart = ({filteredExpense}) => {
    let chartDataPoint = [
        {label: "Jan" , value: 0},
        {label: "Feb" , value: 0},
        {label: "Mar" , value: 0},
        {label: "Apr" , value: 0},
        {label: "May" , value: 0},
        {label: "Jun" , value: 0},
        {label: "Jul" , value: 0},
        {label: "Aug" , value: 0},
        {label: "Sep" , value: 0},
        {label: "Oct" , value: 0},
        {label: "Nov" , value: 0},
        {label: "Dec" , value: 0},
    ]

    filteredExpense.forEach(element => {
        const getExpenseMonth = element.userDate.getMonth()
        chartDataPoint[getExpenseMonth].value += +element.userAmount
    });

    const dataPointValue = chartDataPoint.map(element => element.value)
    const totalMax = Math.max(...dataPointValue)

    return (
        <div className="bg-pink-300 h-[200px] flex justify-around rounded-md p-2">
            {chartDataPoint.map(element => <BarChart key={element.label} chartDataPointValue={element.value} chartDataPointLabel={element.label} totalMax={totalMax}/> )}
        </div>
    )
}

export default ExpensesChart;
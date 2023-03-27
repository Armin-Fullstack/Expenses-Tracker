import BarChart from "./BarChart";
const ExpensesChart = ({filteredExpense}) => {
    const chartDataPoint = [
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
        chartDataPoint[getExpenseMonth].value += element.userAmount
    });
    
    return (
        <div className="bg-pink-300 h-[200px] flex justify-between gap-3 md:gap-0 p-4 rounded-md">
            <BarChart chartDataPoint={chartDataPoint}/>
        </div>
    )
}

export default ExpensesChart;
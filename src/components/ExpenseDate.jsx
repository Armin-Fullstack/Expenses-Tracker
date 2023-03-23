const ExpenseDate = ({userDate}) => {
    const month = userDate.toLocaleString("en-US" , {month: "long"})
    const day = userDate.toLocaleString("en-US" , {day: "2-digit"})
    const year = userDate.getFullYear()
    return (
        <div className="bg-[rgba(0,0,0,0.85)] border-2 border-white text-white py-4 px-6 rounded-lg text-center">
                <p className="font-bold text-sm">{month}</p>
                <p className="text-xs mt-1">{year}</p>
                <p className="font-bold mt-2 text-2xl md:text-3xl">{day}</p>
            </div>
    )
}
export default ExpenseDate;
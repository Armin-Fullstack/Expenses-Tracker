
const ExpensesItem = ({userTitle , userAmount , userDate}) => {
    const month = userDate.toLocaleString("en-US" , {month: "long"})
    const day = userDate.toLocaleString("en-US" , {day: "2-digit"})
    const year = userDate.getFullYear()
    return (
    //   expense item container 
    <div className="bg-zinc-600 flex justify-between items-center rounded-md p-2">
        {/* date and title container  */}
        <div className="flex space-x-3 items-center">
            {/* date  */}
            <div className="bg-[rgba(0,0,0,0.85)] border-2 border-white text-white py-4 px-6 rounded-lg text-center">
                <p className="font-bold text-sm">{month}</p>
                <p className="text-xs mt-1">{year}</p>
                <p className="font-bold mt-2 text-2xl md:text-3xl">{day}</p>
            </div>
            {/* title  */}
            <h2 className="text-white text-xl font-bold">{userTitle}</h2>
        </div>

        {/* price  */}
        <span className="border rounded-lg px-5 py-1 md:px-7 md:py-2 bg-purple-900 text-white">${userAmount}</span>
    </div>
    )
  }
  
  export default ExpensesItem;
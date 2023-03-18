
const ExpensesItem = () => {
    return (
    //   expense item container 
    <div className="bg-zinc-600 flex justify-between rounded-md p-2">
        {/* date and title container  */}
        <div className="flex space-x-2">
            {/* date  */}
            <div className="bg-[rgba(0,0,0,0.85)] border-2 border-white text-white py-4 px-6 rounded-lg text-center">
                <p className="font-bold text-sm">August</p>
                <p className="text-xs mt-1">2023</p>
                <p className="font-bold mt-2 text-2xl md:text-3xl">14</p>
            </div>
        </div>
    </div>
    )
  }
  
  export default ExpensesItem;
import { useState } from "react";
import ExpensesItem from "./ExpensesItem"

const Expenses = () => {
  const [filterYear , setFilterYear] = useState("2019")
  return (
    // main container 
    <div className="main-container mt-8">
        {/* expenses container  */}
        <div className="bg-[rgba(0,0,0,0.6)] flex flex-col rounded-md px-3 py-6 space-y-4">
            {/* filter section  */}
            <div className="flex justify-between items-center mb-5">
              <p className="text-white font-bold">Filter by year</p>
              <select onChange={(e) => setFilterYear(e.target.value)} className="px-8 py-2 rounded-sm focus:outline-none" >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            {/* chart section  */}

            <ExpensesItem/>
        </div>
    </div>
  )
}

export default Expenses;
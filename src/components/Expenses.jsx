import ExpensesItem from "./ExpensesItem"

const Expenses = () => {
  return (
    // main container 
    <div className="main-container mt-8">
        {/* expenses container  */}
        <div className="bg-[rgba(0,0,0,0.6)] flex flex-col rounded-md px-3 py-6 space-y-4">
            {/* filter section  */}

            {/* chart section  */}

            <ExpensesItem/>
        </div>
    </div>
  )
}

export default Expenses;
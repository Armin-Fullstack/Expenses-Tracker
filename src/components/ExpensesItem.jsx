import ExpenseDate from "./ExpenseDate";

const ExpensesItem = ({ userTitle, userAmount, userDate }) => {
  return (
    //   expense item container
    <div className="bg-zinc-600 flex justify-between items-center rounded-md p-2">
      {/* date and title container  */}
      <div className="flex space-x-3 items-center">
        {/* date  */}
        <ExpenseDate userDate={userDate} />
        {/* title  */}
        <h2 className="text-white text-xl font-bold">{userTitle}</h2>
      </div>

      {/* price  */}
      <span className="border rounded-lg px-5 py-1 md:px-7 md:py-2 bg-purple-900 text-white">${userAmount}</span>
    </div>
  );
};

export default ExpensesItem;

import Expenses from "../components/Expenses";
import Form from "../components/Form";
import { useEffect, useState } from "react";
const Home = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [getInfo, setGetInfo] = useState([]);
  const [filterYear , setFilterYear] = useState("2019")
  const [filteredExpense , setFilteredExpense] = useState([])

  const filteredExpensesHandler = () => {
    setFilteredExpense(getInfo.filter((element) => element.userDate.getFullYear().toString() === filterYear))
 }

 useEffect(() => {
  filteredExpensesHandler()
 } , [getInfo , filterYear])

  return (
    <>
      <Form title={title} setTitle={setTitle} amount={amount} setAmount={setAmount} date={date} setDate={setDate} setGetInfo={setGetInfo} getInfo={getInfo} />
      <Expenses getInfo={getInfo} setGetInfo={setGetInfo} filterYear={filterYear} setFilterYear={setFilterYear} filteredExpense={filteredExpense}/>
    </>
  );
};

export default Home;

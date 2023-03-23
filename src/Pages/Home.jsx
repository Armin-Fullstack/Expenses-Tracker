import Expenses from "../components/Expenses";
import Form from "../components/Form";
import { useState } from "react";
const Home = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [getInfo, setGetInfo] = useState([]);

  return (
    <>
      <Form title={title} setTitle={setTitle} amount={amount} setAmount={setAmount} date={date} setDate={setDate} setGetInfo={setGetInfo} getInfo={getInfo} />
      <Expenses getInfo={getInfo}/>
    </>
  );
};

export default Home;

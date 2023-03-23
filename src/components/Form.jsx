import { useState } from "react";

const Form = () => {
    const [title , setTitle] = useState("")
    const [amount , setAmount] = useState("")
    const [date , setDate] = useState("")
    const [getInfo , setGetInfo] = useState([])

    const submitHandler = (e) => {
        console.log("submited");
        e.preventDefault()
        setGetInfo([ ...getInfo , {id: crypto.randomUUID() , userTitle: title , userAmount: amount , userDate: new Date(date)}])
        setTitle("")
        setAmount("")
        setDate("")
    }
    return (
    //   Main container 
    <div className="main-container">
        {/* form container  */}
        <form onSubmit={submitHandler} className="bg-violet-400 mt-7 rounded-md pr-9 pl-3 py-4">
            {/* inputs container  */}
            <div className="flex flex-wrap gap-5 md:max-w-3xl">
                {/*  input title  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
                {/*  input amount  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={(e) => setAmount(e.target.value)} value={amount} className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
                {/*  input date  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Date</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
                </div>
                {/* buttons container  */}
                <div className="flex justify-end mt-10 space-x-8">
                    <button className="text-slate-800 font-bold text-sm md:text-md">Cancel</button>
                    <button type="submit"  className="bg-purple-900 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg">Add Expense</button>
                 </div>
        </form>
    </div>
    )
  }
  
  export default Form;

const Form = () => {
    return (
    //   Main container 
    <div className="main-container">
        {/* form container  */}
        <div className="bg-violet-400 mt-7 rounded-md pr-4 pl-2 py-2">
            {/* inputs container  */}
            <div className="flex flex-wrap gap-5 md:max-w-3xl">
                {/*  input title  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Title</label>
                <input type="text" className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
                {/*  input amount  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Amount</label>
                <input type="number" className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
                {/*  input date  */}
                <div className="flex flex-col space-y-1">
                <label htmlFor="title" className="font-bold">Date</label>
                <input type="date" className="w-[350px] rounded-md focus:outline-none p-2"/>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Form;
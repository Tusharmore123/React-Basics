import { useState,useId } from 'react'
import InputBox from '../inputBox';


import useCurrencyInfo from '../custom hooks/useCurrencyInfo';


function App() {
    const swap=()=>{
        setcurrency(to);
        setTo(currency);
    }
    const[to,setTo]=useState('inr')
    const[from,setFrom]=useState('usd')
    const[displayAmount,setDisplayAmount]=useState(0)
    
    const [amount,setAmount]=useState(0);
    const[currency,setcurrency]=useState("usd");
    let respdata=useCurrencyInfo(currency);
    
    console.log(respdata);
    const options=Object.keys(respdata)
    const propId=useId();
    const calculatedCurr=()=>{
        let curAmount;
        console.log(respdata)
        curAmount=amount*respdata[to]; 
        setDisplayAmount(curAmount)
    }
    return (
        <>
    
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/indian-currency-rupee-sign-with-digital-circuit-lines-background_1017-45130.jpg?w=740&t=st=1712610450~exp=1712611050~hmac=8a09d141aa714b62a0c8a3aacb1f738217790a5fbd2017d912fc85d2347f2ba6')`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           calculatedCurr();
                        }}
                    >
                        <div className="w-full mb-6"> 
                            <InputBox
                            id={propId}
                                label="From"
                                amount={amount}
                                onAmountChange={(val)=>setAmount(val)}
                                onCurrencyChange={(curr)=>setcurrency(curr)}
                                options={options}
                                amountDisable={false}
                                selectCurrency={currency}
                            />
                        </div>
                        <div className="relative w-full h-0.5 mb-6 ">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                            id={propId}
                                label="To"
                                amount={displayAmount}
                                onAmountChange={(val)=>setDisplayAmount(val)}
                                onCurrencyChange={(curr)=>setTo(curr)}
                                options={options}
                                selectCurrency={to}

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default App

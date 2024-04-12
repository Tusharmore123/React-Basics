
function InputBox({
    
    amount,
    onAmountChange,
    amountDisable=true,
    currencyDisable=false,
    onCurrencyChange,
    options,
    selectCurrency="inr",
    label
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2 ">
                <label  className="text-black/40 mb-2 inline-block ">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>onAmountChange && onAmountChange((e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-center text-right px-3">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none mx-5"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange((e.target.value))}
                >
                    
                       {options.map((item)=>(
                        <option value={item} key={item}>{item}</option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

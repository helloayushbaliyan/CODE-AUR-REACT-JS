import React from "react";

export default function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectcurrency,
}) {
  return (
    <>
      <div className=" capitalize">
        <div className="bg-white w-full flex justify-between  rounded-xl">
          <div className="p-4  ">
            <h1 className="text-2xl mb-3  font-bold">{label}</h1>
            <input
              className="bg-white w-[10rem] outline-none text-xl font-semibold"
              placeholder="0"
              type="number"
              value={amount}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div className="p-4  ">
            <h1 className="text-2xl mb-3  font-bold">currency type</h1>
            <div className="flex justify-end">
              <select
                className=" w-[5.5rem] outline-none text-xl font-semibold"
                name=""
                value={selectcurrency}
                onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
                }
              >
                {currencyOption.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

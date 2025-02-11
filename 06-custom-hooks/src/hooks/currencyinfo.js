import { useEffect, useState } from "react";



function Usecurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        let currencyapi = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

        fetch(currencyapi)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))

    }, [currency])

    console.log(data);
    return data

}

export default Usecurrencyinfo



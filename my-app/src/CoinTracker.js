import { useEffect, useState } from "react";
import App from "./App";

function CoinTracker() {
    const [money, setMoney] = useState(1);
    const [convert, setConvert] = useState(true);
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const onChange = (event) => {
        if (parseInt(event.target.value) === NaN) {
            setMoney(1)
            return
        }
        setMoney(parseInt(event.target.value));
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onClick = () => {
        setConvert((current) => !current);
    }
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            <form>
                <input
                    onChange = {onChange}
                    //value = {money}
                    type="text"
                    placeholder="write your money"
                />
                <button onClick={onClick}>{convert ? "convert" : "Turn Back"}</button>
            </form >
            {loading ? (
                <string>Loading... </string>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option>
                            {convert ? 
                                `${coin.name} (${coin.symbol}): ${coin.quotes.USD.price} USD`
                                : `${coin.name} (${coin.symbol}): ${Math.floor(money / coin.quotes.USD.price)} EA`
                            }
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default CoinTracker;


//돈 입력받고 얼만큼의 코인을 살 수 있는지 계산하는 converter
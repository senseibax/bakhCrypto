import React from "react";
import './listCoin.css'
import ApiCoin from "../ApiConfig/ApiCoin";


const ListCoin = ({coins, search, loading}) => {
    if (!coins) {
        console.log("Coins null")
        return null; // Возвращаем null, если данные не доступны
    }

    if(loading){
        console.log("Loading...")
        return <div>Loading...</div>
    }

    function formatMarketCap(marketCap) {
        const suffixes = ["", "K", "M", "B"];
        const suffixNum = Math.floor(Math.log10(marketCap) / 3);
        const maxSuffixIndex = suffixes.length - 1;
        let formattedMarketCap = parseFloat((marketCap / Math.pow(10, suffixNum * 3)).toPrecision(3));
        if (formattedMarketCap % 1 !== 0) {
            formattedMarketCap = formattedMarketCap.toFixed(2);
        }
        const suffix = suffixNum > maxSuffixIndex ? suffixes[maxSuffixIndex] : suffixes[suffixNum];
        return "$" + formattedMarketCap + suffix;
    }

    const filterCoin = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Название</th>
                <th>Цена</th>
                <th>Изменение</th>
                <th>Капитализация</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {filterCoin.map((coin) => (
                <tr key={coin.id}>
                    <td>
                        <img src={coin.image} alt={coin.name} width="30" height="30" />
                    </td>

                    <td>
                        <span className="bold-text">{coin.name}</span> <span className="light-text">{coin.symbol}</span>
                    </td>
                    <td>{coin.current_price} $</td>

                    <td className={coin.price_change_percentage_24h >= 0 ? 'positive-change' : 'negative-change'}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>

                    <td>
                        {formatMarketCap(coin.market_cap)}
                    </td>
                    <td><button className="styled-button">Подробнее</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}



export default ListCoin
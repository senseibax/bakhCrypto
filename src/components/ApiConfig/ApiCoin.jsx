import React, {useEffect, useState} from "react";
import axios from "axios";
import Search from "../Search/Search";
import ListCoin from "../List/ListCoin";

function ApiCoin(){
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1');
                console.log(res.data);
                if (!res.data) {
                    throw new Error('Ответ от API пустой');
                }
                setCoins(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            }
        };
        getData()
    }, [])

    const serchHundle = (e) => {
        setSearch(e.target.value)
    }


    return (
        <>
            <div className='container-search'>
                <Search onChange={serchHundle}/>
            </div>
            < ListCoin coins={coins} search={search} loading={loading} />
        </>
    )
}

export default ApiCoin
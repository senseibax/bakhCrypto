import axios from 'axios'
import { useEffect, useState } from 'react';
import Nft from "../Nft/Nft";


function NftConfigureApi() {
    const [nft, setNft] = useState([]);



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/nfts/list');
                const data = await res.json()
                console.log(data);
                if (res.status === 200) {
                    setNft(data);
                } else {
                    console.error('Ошибка при получении данных:', res.status);
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
        getData()
    }, );

    return (
        <>
            <Nft nft={nft} />
        </>
    );
}
export default NftConfigureApi
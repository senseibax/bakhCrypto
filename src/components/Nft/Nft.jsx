import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Nft({nft}) {
    return(
        <>
            <Header/>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Название</th>
                    <th>Платформа</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {nft.map((nfts) => (
                    <tr key={nfts.id}>
                        <td>
                            <span className="bold-text">{nfts.name}</span> <span className="light-text">{nfts.symbol}</span>
                        </td>
                        <td>
                            {nfts.asset_platform_id}
                        </td>
                        <td><button className="styled-button">Подробнее</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer/>
        </>
    )
}

export default Nft
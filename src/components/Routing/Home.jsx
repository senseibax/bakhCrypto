import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import ListCoin from "../List/ListCoin";

function Home() {
    return(
        <>
         <Header/>
         <Search/>
            <ListCoin/>
         <Footer/>
        </>
    )
}

export default Home
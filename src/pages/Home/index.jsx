import React from "react";
import styles from "./Home.module.css"
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Body from "../../components/Body";
import PreFooter from "../../components/Footer/Prefooter";
import Acessibilidade from "../../components/Acessibilidade"
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
const Home = ()=>{
    return(
        <div>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <Banner></Banner>
            <Body></Body>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Home
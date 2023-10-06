import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import SubFooter from "../../components/Footer/Subfooter";
import Body from "../../components/Body";
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

const Home = ()=>{
    return(
        <div>
                <Header></Header>
                <Banner></Banner>
                <Body></Body>
                <PreFooter></PreFooter>
                <Footer></Footer>
                <SubFooter></SubFooter>
            
        </div>
    )
}

export default Home
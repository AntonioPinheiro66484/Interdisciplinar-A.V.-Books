import React from "react";
import styles from "./Home.module.css"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Body from "../../components/Body/Body";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
const Home = ()=>{
    return(
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Body></Body>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Home
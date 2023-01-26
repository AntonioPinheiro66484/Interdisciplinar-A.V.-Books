import React from "react";
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Body from "../../components/Body/Body";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Produtos from "../../components/Produtos/Produtos";

const Pesquisa =()=>{
    return(
        <div>
            <Header></Header>
            <NavBar></NavBar>
             <div className={styles.produtosPesquisa}>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
             </div>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Pesquisa
import React from "react";
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Body from "../../components/Body/Body";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Produtos from "../../components/Produtos/Produtos";
import Filtros from "../../components/Filtros/Filtros";




const Pesquisa =()=>{
    return(
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className={styles.breadcrumb}>
                <ul className={styles.breadcrumbNavigation}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Pesquisa">Pesquisa</a></li>
                </ul>

            </div>
            
            <div className={styles.conteudo}>
            <div className={styles.caixaFiltros}>
                <Filtros/>
            </div>

             <div className={styles.produtosPesquisa}>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
             </div>
             </div>
             
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Pesquisa
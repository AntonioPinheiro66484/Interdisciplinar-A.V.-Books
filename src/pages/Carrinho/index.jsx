import React from "react";
import styles from "./Carrinho.module.css"
import Header from "../../components/Header";
import ProdutoCarrinho from "../../components/ProdutoCarrinho"
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import SubFooter from "../../components/Footer/Subfooter";


const Carrinho =()=>{
    

    return(
        <div className={styles.paginaPesquisa}>
            <Header></Header>
            <div className={styles.breadcrumb}>
                <ul className={styles.breadcrumbNavigation}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Pesquisa">Pesquisa</a></li>
                </ul>
            </div>
            <div className={styles.conteudo}>
                <ProdutoCarrinho/>
                <ProdutoCarrinho/>
                <ProdutoCarrinho/>
            </div>
             
            <PreFooter></PreFooter>
            <Footer></Footer>
            <SubFooter></SubFooter>
        </div>
    )
}

export default Carrinho


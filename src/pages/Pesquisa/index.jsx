import React from "react";
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header";
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import SubFooter from "../../components/Footer/Subfooter"
import Produtos from "../../components/Produtos";
import Identificador from "../../components/Botoes/Paginacao/Identificador";
import Incrementar from "../../components/Botoes/Paginacao/Incrementar";
import Decrementar from "../../components/Botoes/Paginacao/Decrementar";


const Pesquisa =()=>{
    

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
           
             <div className={styles.produtosPesquisa}>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
                    <Produtos/>
             <div className={styles.caixaPaginacao}>
                    <Decrementar/>
                    <Identificador/>
                    <Incrementar/>
             </div>
             </div>
             </div>
             
            <PreFooter></PreFooter>
            <Footer></Footer>
            <SubFooter></SubFooter>
        </div>
    )
}

export default Pesquisa


import React from "react";
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Body from "../../components/Body/Body";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Produtos from "../../components/Produtos/Produtos";
import Filtros from "../../components/Filtros/Filtros";
import Identificador from "../../components/Botoes/Paginacao/Identificador";
import Incrementar from "../../components/Botoes/Paginacao/Incrementar";
import Decrementar from "../../components/Botoes/Paginacao/Decrementar";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade"



const Pesquisa =()=>{
    return(
        <div className={styles.paginaPesquisa}>
            <Acessibilidade/>
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

             <div className={styles.caixaPaginacao}>
                    <Decrementar/>
                    <Identificador/>
                    <Incrementar/>
             </div>
             </div>
             
             </div>
             
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Pesquisa
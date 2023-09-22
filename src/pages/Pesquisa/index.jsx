import React from "react";
import { useState } from 'react'
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header";
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos";
import Filtros from "../../components/Filtros";
import Identificador from "../../components/Botoes/Paginacao/Identificador";
import Incrementar from "../../components/Botoes/Paginacao/Incrementar";
import Decrementar from "../../components/Botoes/Paginacao/Decrementar";


const Pesquisa =()=>{
    
   const [isFiltro, setIsFiltro]=useState(false);


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


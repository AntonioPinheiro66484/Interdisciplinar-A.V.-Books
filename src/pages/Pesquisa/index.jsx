import React from "react";
import { useState } from 'react'
import styles from "./Pesquisa.module.css"
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Body from "../../components/Body";
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos";
import Filtros from "../../components/Filtros";
import Identificador from "../../components/Botoes/Paginacao/Identificador";
import Incrementar from "../../components/Botoes/Paginacao/Incrementar";
import Decrementar from "../../components/Botoes/Paginacao/Decrementar";
import Acessibilidade from "../../components/Acessibilidade";
import setaEsquerda from  "../../assets/icons/seta-esquerda.png"
import setaDireita from  "../../assets/icons/seta-direita.png"



const Pesquisa =()=>{
    
   const [isFiltro, setIsFiltro]=useState(false);


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

         {/* <div className={styles.caixaBotaoFiltro}>
            <button className={styles.botaoFiltro}
            onClick={()=> setIsFiltro(!isFiltro)}
            >
              {isFiltro ? (
                <img className={styles.imgSetaEsquerda} src={setaEsquerda}/>
               ):(
                <img className={styles.imgSetaDireita} src={setaDireita}/>
               )}
         </button>
       </div> */}


         {/* <div className={isFiltro ? styles.caixaFiltro : styles.caixaFiltro}
              onClick={()=>setIsFiltro(false)}
            >
       

        </div> */}
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


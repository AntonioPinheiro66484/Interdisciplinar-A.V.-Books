import React from 'react'
import styles from './DetalhesProduto.module.css'
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Carrossel from '../../components/Carrossel/Carrossel'
import BodyPedido from '../../components/Body/BodyPedido/BodyPedido';
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade"
import ProdutoPedido from '../../components/ProdutoPedido';

const DetalhesProduto = ()=>{
    return(
        <div className={styles.caixa}>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
                <div className={styles.breadcrumb}>
                    <ul className={styles.breadcrumbNavigation}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/DetalhesProduto">Produto</a></li>
                    </ul>
                </div>
            <ProdutoPedido/>
            <BodyPedido/>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}
export default DetalhesProduto


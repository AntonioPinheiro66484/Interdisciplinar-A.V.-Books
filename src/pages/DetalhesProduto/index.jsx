import React from 'react'
import styles from './DetalhesProduto.module.css'
import Header from "../../components/Header";
import PreFooter from "../../components/Footer/Prefooter";
import Footer from "../../components/Footer";
import SubFooter from "../../components/Footer/Subfooter";
import BodyPedido from '../../components/Body/BodyPedido';
import ProdutoPedido from '../../components/ProdutoPedido';

const DetalhesProduto = ()=>{
    return(
        <div className={styles.caixa}>
            <Header></Header>
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
            <SubFooter></SubFooter>
        </div>
    )
}
export default DetalhesProduto


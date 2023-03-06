import React from "react";
import Formulario from "../../components/Cadastro/Formulario/FormularioCliente";
import Footer from "../../components/Footer";
import PreFooter from "../../components/Footer/Prefooter";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Acessibilidade from "../../components/Acessibilidade";
import styles from "./Cadastro.module.css";


const Cadastro =()=>{
    return (
        <div>
            <Acessibilidade/>
            <Header></Header>
            <NavBar></NavBar>
            <div className={styles.breadcrumb}>
                <ul className={styles.breadcrumbNavigation}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Cadastro">Cadastro</a></li>
                </ul>
            </div>
            <Formulario></Formulario>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Cadastro
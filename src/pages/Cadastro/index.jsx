import React from "react";
import Formulario from "../../components/Cadastro/Formulario/FormularioCliente/Formulario";
import Footer from "../../components/Footer/Footer";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";
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
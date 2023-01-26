import React from "react";
import Formulario from "../../components/Cadastro/Formulario/Formulario";
import Footer from "../../components/Footer/Footer";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Cadastro.module.css"

const Cadastro =()=>{
    return (
        <div className={styles.cadastro}>
            <Header></Header>
            <NavBar></NavBar>
            <Formulario></Formulario>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Cadastro
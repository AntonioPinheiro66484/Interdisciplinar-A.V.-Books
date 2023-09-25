import React from "react";
import styles from "./Cadastro.module.css";
import Formulario from "../../components/Cadastro/Formulario/FormularioCliente";
import AvBookslogo from '../../assets/images/Imagens/logo.png'


const Cadastro =()=>{
    return (
        <div className={styles.caixa}>
            <div className={styles.caixaLogo}>
                <img className={styles.logo} src={AvBookslogo}/>
                <div className={styles.tituloLogoSite}>A.V. Books</div>
                <div className={styles.texto}>Cadastre-se</div>
            </div>
            <Formulario></Formulario>
        </div>
    )
}

export default Cadastro
import React from "react";
import styles from '../FormularioCliente/Formulario.module.css'
import InputDados from "../../Input/InputDados";
import InputEndereco from "../../Input/InputEndereço";
import BotaoCadastrar from "../../../Botoes/BotaoCadastrar";


const Formulario = ()=>{
    return(<div className={styles.caixa}>
            <div className={styles.formulario}>
                <h3 className={styles.titulo1}> Cadastre-se </h3>
                    <InputDados/>
                <h4 className={styles.titulo2}> Endereço </h4>
                    <InputEndereco></InputEndereco>
                <div className={styles.caixaBotao}>
                    <BotaoCadastrar></BotaoCadastrar>
                </div>
            </div>
        </div>
    )
}

export default Formulario
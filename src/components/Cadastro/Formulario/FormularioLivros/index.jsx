import React from "react";
import styles from "./FormularioLivros.module.css"
import InputLivros from "../../Input/InputLivros";
import BotaoCadastrar from "../../../Botoes/BotaoCadastrar";


const Formulario = ()=>{
    return(<div className={styles.caixa}>
            <div className={styles.formulario}>
                <h3 className={styles.titulo1}>Cadastrar livro</h3>
                    <InputLivros/>
                <div className={styles.caixaBotao}>
                    <BotaoCadastrar></BotaoCadastrar>
                </div>
            </div>
        </div>
    )
}

export default Formulario
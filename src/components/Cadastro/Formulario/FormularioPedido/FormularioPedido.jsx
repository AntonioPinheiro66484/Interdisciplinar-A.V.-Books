import React from "react";
import styles from "./FormularioPedido.module.css"
import InputPedido from "../../Input/InputPedido/InputPedido";
import BotaoCadastrar from "../../../Botoes/BotaoCadastrar";


const FormularioPedido = ()=>{
    return(<div className={styles.caixa}>
            <div className={styles.formulario}>
                <h3 className={styles.titulo1}>Cadastrar Pedido</h3>
                    <InputPedido/>
                <div className={styles.caixaBotao}>
                    <BotaoCadastrar></BotaoCadastrar>
                </div>
            </div>
        </div>
    )
}

export default FormularioPedido
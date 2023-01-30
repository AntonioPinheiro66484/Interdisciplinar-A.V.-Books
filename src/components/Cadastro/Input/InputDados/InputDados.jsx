import React from "react";
import styles from "./InputDados.module.css"

const InputDados =()=>{
    return(
        <div className={styles.inputs}>
        <div className={styles.caixa}>
            <div className={styles.campoTexto}>
                <label class={styles.label}>Nome</label>
                <input className={styles.input} type="text" placeholder="Digite seu nome..."></input>
            </div>

            <div className={styles.campoTexto}>
                <label class={styles.label}>Cpf</label>
                <input className={styles.input} type="text" placeholder="Digite o seu CPF..."></input>
            </div>

            <div className={styles.campoTexto}>
                <label class={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="Digite seu e-mail..."></input>
            </div>

            <div className={styles.campoTexto}>
                <label class={styles.label}>Senha</label>
                <input className={styles.input} type="password" placeholder="Digite sua senha..."></input>
            </div>
        </div>
           
        </div>
        )
    
}

export default InputDados
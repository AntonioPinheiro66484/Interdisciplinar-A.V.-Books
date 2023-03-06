import React from 'react'
import styles from './InputFornecedor.module.css'

const InputFornecedor = () => {
  return (
    <div className={styles.inputs}>
    <div className={styles.caixa}>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Nome</label>
            <input className={styles.input} type="text" placeholder="Digite seu nome..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>CNPJ</label>
            <input className={styles.input} type="text" placeholder="Digite o seu CPF..."></input>
        </div>

    </div>
       
    </div>
  )
}

export default InputFornecedor